import React, { useState, useEffect, useRef, useCallback } from "react";

interface CameraProps {
  isOpened: boolean;
  onCapture: (url: string) => void;
}

const Camera: React.FC<CameraProps> = ({ isOpened, onCapture }) => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [isStreamActive, setIsStreamActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream>(null);

  // Mendapatkan daftar perangkat kamera
  const getDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setDevices(videoDevices);
    } catch (error) {
      console.error("Error enumerating devices:", error);
    }
  };

  const startStream = useCallback(async (deviceId: string = "") => {
    // Menghentikan stream sebelumnya jika ada
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    try {
      const constraints: MediaStreamConstraints = {
        video: { aspectRatio: 3 / 4 },
        audio: false,
      };

      if (deviceId)
        constraints.video = { aspectRatio: 3 / 4, deviceId: deviceId };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreamActive(true);
        setSelectedDeviceId(stream.getVideoTracks()[0].getSettings().deviceId!);
        localStorage.setItem(
          "deviceId",
          stream.getVideoTracks()[0].getSettings().deviceId!
        );
      }
      await getDevices();
    } catch (error) {
      console.error("Error accessing camera:", error);
      setIsStreamActive(false);
    }
  }, []);

  // Mengambil gambar dari video stream
  const captureImage = () => {
    if (!videoRef.current || !isStreamActive) return;

    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx!.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/jpeg");

    // Memanggil callback dengan data gambar
    if (onCapture) {
      onCapture(imageDataUrl);
    }
  };

  // Memperbarui render ketika isOpened berubah
  useEffect(() => {
    if (!isOpened && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    } else if (isOpened) {
      startStream(localStorage.getItem("deviceId") || "");
    }
  }, [isOpened, startStream]);

  // Membersihkan stream saat komponen unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="w-full sm:w-1/2 px-2" hidden={!isOpened}>
      <div className="camera-preview">
        <video ref={videoRef} autoPlay playsInline muted />
      </div>

      <div className="flex rounded-md shadow-sm mt-2">
        <select
          value={selectedDeviceId}
          onChange={(e) => startStream(e.target.value)}
          disabled={!devices.length}
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `Camera ${device.deviceId.slice(0, 5)}`}
            </option>
          ))}
        </select>

        <button
          onClick={captureImage}
          disabled={!isStreamActive}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Ambil Gambar
        </button>
      </div>
    </div>
  );
};

export default Camera;
