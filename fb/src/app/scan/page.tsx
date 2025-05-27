import "tailwindcss";
import Image from "next/image";

export default function ScanLayout() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-center text-3xl text-bold text-red-500">Scan Motif Batik</h1>
      <div className="rounded-sm bg-white p-2">
        <div className="w-full relative aspect-square">
          <Image
            src="/photo-add-placeholder 1.png"
            alt="Placeholder"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 text-black">
          <button id="openGalery" className="bg-gray-300 rounded-sm px-2">
            Ambil dari Galeri
          </button>
          <button id="openCamera" className="bg-gray-300 rounded-sm">
            Buka Kamera
          </button>
          <button
            id="imageSubmit"
            type="submit"
            className="col-span-2 bg-red-500 text-white rounded-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
