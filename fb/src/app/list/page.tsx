"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Batik = {
  uuid: number;
  name: string;
  originCity: string;
};

export default function ListLayout() {
  const [batikData, setBatikData] = useState<Batik[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = search ? `/api/batik?search=${search}` : `/api/batik`;
      const res = await fetch(url);
      const json = await res.json();
      setBatikData(json.data);
    };

    fetchData();
  }, [search]);

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Form Search */}
      <form
        className="container flex max-w-6xl mx-auto my-4 px-4 pt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="search-batik"
          name="search-batik"
          type="text"
          placeholder="Cari batik berdasarkan nama atau daerah"
          className="flex-grow border-2 rounded-full px-4 py-2 border-gray-500 placeholder:text-gray-400 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {/* List */}
      <div className="container max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black">
        {batikData.map((batik) => (
          <div
            key={batik.uuid}
            className="bg-white rounded-xl shadow p-4 border border-gray-200"
          >
            <div className="relative w-full h-48 mb-2 overflow-hidden">
              <Image
                src={`/images/${batik.name}/picture-1.jpg`}
                alt={`Motif Batik ${batik.name}`}
                fill
                className="object-fill rounded-md"
              />
            </div>

            <h2 className="text-lg font-semibold">{batik.name}</h2>
            <p className="text-gray-600">Asal: {batik.originCity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
