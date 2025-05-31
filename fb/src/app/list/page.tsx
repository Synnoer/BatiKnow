"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Batik } from "../../../db/generated/prisma";
import Link from "next/link";
import Image from "next/image";
import Loader from "../component/loader";

export default function ListLayout() {
  const [search, setSearch] = useState("");
  const [batikData, setBatikData] = useState<Batik[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = search ? `/api/batik?search=${search}` : `/api/batik`;
      const res = await fetch(url);
      const json = await res.json();
      setBatikData(json.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div className="flex-grow flex flex-col items-center bg-gray-100 w-full min-h-screen">
      {/* Form Search */}
      <form
        className="container flex w-full max-w-6xl mx-auto my-4 px-4 pt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            id="search-batik"
            name="search-batik"
            type="text"
            placeholder="Cari batik berdasarkan nama atau daerah"
            className="w-full border-2 rounded-full pl-10 pr-4 py-2 border-gray-500 placeholder:text-gray-400 text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="container max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black pb-18 sm:pb-4">
          {batikData.map((batik) => (
            <Link
              href={`/list/${batik.uuid}`}
              key={batik.uuid}
              className="bg-white rounded-xl shadow p-4 border border-gray-200"
            >
              <div className="relative w-full h-48 mb-2 overflow-hidden">
                <Image
                  src={`/images/${batik.name}/picture-1.jpg`}
                  alt={`Motif Batik ${batik.name}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <h2 className="text-lg font-semibold">{batik.name}</h2>
              <p className="text-gray-600">Asal: {batik.originCity}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
