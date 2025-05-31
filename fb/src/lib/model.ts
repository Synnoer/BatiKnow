import * as tf from '@tensorflow/tfjs-node';
import path from 'path'

async function loadImageAsTensor(imageBuffer: Buffer) {
    const imageTensor = tf.node.decodeImage(imageBuffer, 3); // RGB

    // Resize ke 224x224
    const resized = tf.image.resizeBilinear(imageTensor, [224, 224]);

    // Ubah ke float32 dan skalakan ke [0,1]
    const floatImg = resized.toFloat().div(255.0);

    // Normalisasi dengan mean dan std per channel (EfficientNet style)
    const meanRgb = [0.485, 0.456, 0.406];
    const stdRgb = [0.229, 0.224, 0.225];

    const normalized = tf.tidy(() => {
        const meanTensor = tf.tensor1d(meanRgb);
        const stdTensor = tf.tensor1d(stdRgb);

        return floatImg.sub(meanTensor).div(stdTensor);
    });

    // Tambahkan dimensi batch: [1, 224, 224, 3]
    const batched = normalized.expandDims(0);

    return batched;
}

export async function scan(imageBuffer: Buffer<ArrayBuffer>) {
    // Load model
    const model = await tf.loadGraphModel('file://' + path.resolve(__dirname, '../../../../../src/model', 'model.json'));

    // Load dan proses gambar
    const inputTensor = await loadImageAsTensor(imageBuffer);

    // // Prediksi
    const prediction = model.predict(inputTensor) as tf.Tensor;

    // // Jika hasilnya Tensor 2D bisa di-argMax untuk ambil label
    const labelIndex = prediction.argMax(-1).dataSync()[0];

    return labelIndex.toString();
}