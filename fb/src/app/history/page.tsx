"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "../component/loader";
import toast from "react-hot-toast";

type HistoryData = {
  uuid: string;
  pictureUrl: string;
  batik?: {
    name: string;
  };
};

export default function HistoryLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/history", {
          credentials: "include",
        });

        if (!res.ok) {
          if (res.status === 401) {
            toast.error(
              "Sesi login kamu udah kedaluwarsa. Silakan login ulang."
            );
          } else {
            toast.error(`Gagal ambil data. Error ${res.status}`);
          }
          return;
        }

        const json = await res.json();
        setHistoryData(json.data || []);
      } catch (err) {
        toast.error("Gagal mengambil data history.");
        console.error("Fetch history error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 w-full min-h-screen pb-10">
      <h1 className="text-2xl font-bold text-black my-4">Riwayat Scan Batik</h1>

      {isLoading ? (
        <Loader />
      ) : historyData.length === 0 ? (
        <p className="text-gray-500">Belum ada riwayat scan batik.</p>
      ) : (
        <div className="container max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black">
          {historyData.map((history) => (
            <Link
              href={`/history/${history.uuid}`}
              key={history.uuid}
              className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-48 mb-2 overflow-hidden rounded-md">
                <Image
                  src={`/api/uploaded/${history.pictureUrl}`}
                  alt={`Motif Batik`}
                  fill
                  className="object-cover rounded-md"
                  onError={(e) => {
                    console.log(e);
                    (e.target as HTMLImageElement).src = "/photo-add-placeholder 1.png";
                  }}
                />
              </div>

              <h2 className="text-lg font-semibold truncate">
                Kode: {history.uuid}
              </h2>
              <p className="text-gray-600 truncate">
                Motif: {history.batik?.name || "Tidak Diketahui"}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
