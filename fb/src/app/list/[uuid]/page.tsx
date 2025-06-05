"use client";

import { Batik } from "../../../../db/generated/prisma";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/app/component/loader";
import Carousel from "@/app/component/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function BatikDetailPage() {
  const { uuid } = useParams<{ uuid: string }>();

  const [batik, setBatik] = useState<Batik | null>(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getBatik = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/batik/${uuid}`);

        const data = await res.json();

        setBatik(data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getBatik();
  }, [uuid]);

  useEffect(() => {
    if (!batik) return;

    const batikImages: string[] = [];
    for (let i = 1; i < 9; i++)
      batikImages.push(`/images/${batik.name}/picture-${i}.jpg`);
    setImages(batikImages);
  }, [batik]);

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 mb-18 sm:mb-3 pt-4 text-black">
      {batik ? (
        <div className="rounded-sm bg-white p-2 sm:w-3xl shadow">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-2 sm:mx-0 mx-1">
              <Carousel images={images} autoPlay={true} interval={5000} />
            </div>

            <div className="w-full sm:w-1/2 px-2 text-center">
              <h1 className="text-2xl font-bold">{batik.name}</h1>

              <p className="text-gray-600">Asal : {batik.originCity}</p>

              <div className="text-left">
                <h3 className="font-semibold text-lg my-2">Deskripsi :</h3>

                <p className="rounded-sm bg-gray-200 p-2">
                  {batik.description}
                  <br /><br />
                  Referensi : {batik.reference}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="p-4 mb-4 text-lg text-red-700 bg-red-100 rounded-lg">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          <span className="font-medium">Batik not found</span>
        </div>
      )}
    </div>
  );
}
