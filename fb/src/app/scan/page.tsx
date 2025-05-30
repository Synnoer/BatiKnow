"use client";

import "tailwindcss";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Camera from "../component/camera";

function base64ToBlob(base64Data: string, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(base64Data.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

function base64ToFile(base64Data: string, filename: string, contentType = "") {
  const blob = base64ToBlob(base64Data, contentType);
  return new File([blob], filename, { type: contentType });
}

export default function ScanLayout() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cameraOpened, setCameraOpened] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
      setPreviewUrl(URL.createObjectURL(files[0]));
      setTimeout(() => URL.revokeObjectURL(previewUrl!), 1000);
    }
  };

  const handlePhotoTaken = (data: string) => {
    setPreviewUrl(data);
    setImage(base64ToFile(data, "capture.jpg", "image/jpg"));
  };

  const handleScanButton = async () => {
    const formData = new FormData();
    formData.append("image", image!);

    try {
      const res = await fetch("/api/scan", { method: "POST", body: formData });

      if (!res.ok) toast.error("Scan failed");

      const result = await res.json();
      toast.success(result.message);
    } catch (e: unknown) {
      toast.error((e as Error).message);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center mb-16 sm:mb-3">
      <h1 className="text-center text-3xl text-bold text-red-500">
        Scan Motif Batik
      </h1>
      <div className="rounded-sm bg-white p-2">
        <div className="flex flex-wrap -mx-2">
          <div className={`w-1/1 sm:w-1/${cameraOpened ? "2" : "1"} px-2`}>
            <div className="w-full relative aspect-square">
              <Image
                src={previewUrl || "/photo-add-placeholder 1.png"}
                alt="Placeholder"
                style={{ objectFit: "cover" }}
                className="rounded-sm"
                fill
              />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />

            <div className="grid grid-cols-2 gap-2 mt-2 text-black mb-2 sm:mb-0">
              <button
                id="openGalery"
                className="bg-gray-200 hover:bg-gray-300 rounded-sm px-4 py-2"
                onClick={handleButtonClick}
              >
                Ambil dari Galeri
              </button>
              <button
                id="openCamera"
                className="bg-gray-200 hover:bg-gray-300 rounded-sm px-4 py-2"
                onClick={() => setCameraOpened(!cameraOpened)}
              >
                {cameraOpened ? "Tutup Kamera" : "Buka Kamera"}
              </button>
            </div>
          </div>

          <Camera isOpened={cameraOpened} onCapture={handlePhotoTaken} />

          <div className={`w-1/1 sm:w-1/${cameraOpened ? "2" : "1"} px-2`}>
            <button
              disabled={image == null}
              id="imageSubmit"
              type="submit"
              className="w-full bg-red-500 text-white rounded-md px-4 py-2 mt-2 disabled:bg-red-400 hover:bg-red-600"
              onClick={handleScanButton}
            >
              Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
