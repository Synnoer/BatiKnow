from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from tensorflow.keras.applications import efficientnet
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import img_to_array
import numpy as np
from PIL import Image
import io

# Inisialisasi FastAPI
app = FastAPI()

# Load model
model = load_model("model/model.keras")  # ganti path jika beda

# Fungsi preprocessing
def preprocess_image(file: UploadFile):
    img = Image.open(io.BytesIO(file.file.read())).convert("RGB")
    img = img.resize((224, 224))
    img_array = img_to_array(img)  # Convert to NumPy array
    img_array = efficientnet.preprocess_input(img_array)  # Apply EfficientNet preprocessing
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    try:
        img_array = preprocess_image(image)

        prediction = model.predict(img_array)
        class_idx = int(np.argmax(prediction[0]))
        confidence = float(np.max(prediction[0]))

        return JSONResponse({
            "class_id": class_idx,
            "confidence": f"{confidence * 100:.2f}%",
        })
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
