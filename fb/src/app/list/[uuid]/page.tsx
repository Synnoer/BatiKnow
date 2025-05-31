import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BatikDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const awaitedParams = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL not defined");

  const res = await fetch(`${baseUrl}/api/batik/${awaitedParams.uuid}`, { cache: "no-store" });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  const batik = data.data;

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 mb-16 sm:mb-3 pt-4 text-black">
      <div className="rounded-sm bg-white p-2">
        <div className="flex flex-wrap mx-2">
          <div className="w-full relative aspect-video mb-2">
            <Image src={`/images/${batik.name}/picture-1.jpg`} alt={batik.name} fill style={{ objectFit: "cover"}} className="rounded-sm"/>
          </div>
          
          <div className="w-xl text-center">
            <h1 className="text-2xl font-bold">{batik.name}</h1>
            <p className="text-gray-600">Asal : {batik.originCity}</p>
            <div className="text-left">
              <h3 className="text-lg my-2">Deskripsi :</h3>
              <p className="rounded-sm bg-gray-200 p-2">{batik.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
