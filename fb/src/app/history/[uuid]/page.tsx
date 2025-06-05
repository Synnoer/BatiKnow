"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Carousel from "../../component/carousel";
import toast from "react-hot-toast";
import Loader from "@/app/component/loader";

type HistoryDetail = {
  uuid: string;
  pictureUrl: string;
  batik?: {
    name: string;
    originCity: string;
    description: string;
    reference: string;
  };
};

export default function HistoryDetailPage() {
  const { uuid } = useParams();
  const [data, setData] = useState<HistoryDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`/api/history/${uuid}`, {
          credentials: "include",
        });

        if (!res.ok) {
          toast.error(`Gagal ambil detail (${res.status})`);
          return;
        }

        const json = await res.json();
        setData(json.data);
      } catch (e: unknown) {
        toast.error((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [uuid]);

  const carouselImages = useMemo(() => {
    if (!data?.batik?.name) return [];

    const images = [];
    for (let i = 1; i < 9; i++) {
      images.push(`/images/${data.batik.name}/picture-${i}.jpg`);
    }

    return [`/api/uploaded/${data.pictureUrl}`, ...images];
  }, [data]);

  if (isLoading)
    return (
      <div className="flex-grow flex flex-col items-center bg-gray-100 w-full min-h-screen pb-10">
        <Loader />
      </div>
    );
  if (!data)
    return <div className="text-center p-4">Data tidak ditemukan.</div>;

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 mb-18 sm:mb-3 pt-4 text-black">
      <div className="bg-white rounded-md shadow p-4 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4">
          Detail Riwayat Scan
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2">
            <Carousel images={carouselImages} autoPlay interval={5000} />
          </div>

          <div className="sm:w-1/2 text-center">
            <h2 className="text-xl font-semibold">
              {data.batik?.name || "Motif Tidak Dikenal"}
            </h2>
            <p className="text-gray-600">
              Asal: {data.batik?.originCity || "-"}
            </p>

            <div className="text-left">
              <h3 className="font-semibold text-lg my-2">Deskripsi:</h3>
              <p className="bg-gray-200 p-2 rounded-md">
                {data.batik?.description || "Tidak ada deskripsi."}
                <br />
                <br />
                Referensi : {data.batik?.reference}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
