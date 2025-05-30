import * as tf from '@tensorflow/tfjs-node';
import path from 'path'

const labels: Record<number, string> = {
    0: 'Aceh Pintu Aceh',
    1: 'Bali Barong',
    2: 'Bali Merak',
    3: 'DKI Ondel Ondel',
    4: 'Jawa Barat Megamendung',
    5: 'Jawa Tengah Batik Lasem',
    6: 'Jawa Timur Pring',
    7: 'Kalimantan Barat Insang',
    8: 'Kalimantan Dayak',
    9: 'Lampung Gajah',
    10: 'Madura Mataketeran',
    11: 'Maluku Pala',
    12: 'NTB Lumbung',
    13: 'Palembang Songket',
    14: 'Papua Asmat',
    15: 'Papua Cendrawasih',
    16: 'Papua Tifa',
    17: 'Solo Parang',
    18: 'Solo Sidoluhur',
    19: 'Solo Sogan',
    20: 'Solo Truntum',
    21: 'Sulawesi Selatan Lontara',
    22: 'Sumatera Barat Rumah Minang',
    23: 'Sumatera Utara Boraspati',
    24: 'Yogyakarta Kawung',
    25: 'Yogyakarta Sidomukti'
};

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

    return labels[labelIndex] ?? '';
}