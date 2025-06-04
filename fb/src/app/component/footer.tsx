import Link from "next/link";

import React from "react";

export const Footer = (): React.ReactElement => {
  return (
    <div className="bg-red-800 text-white">
      <div className="grid grid-cols-2 sm:flex sm:justify-around sm:text-wrap pt-10 pb-24 px-10 sm:px-0 max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-0 col-span-2">
          <h3 className="text-xl font-bold">BatiKnow</h3>
          <p className="text-sm text-gray-300 sm:max-w-40">
            Kunjungi BatiKnow dan perluas wawasanmu tentang beragam motif,
            teknik, dan filosofi batik dari seluruh Indonesia
          </p>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-bold">Explore</h3>
          <div className="flex flex-col text-sm text-gray-300">
            <Link href="/" className=" hover:text-white">
              Home
            </Link>
            <Link href="/scan" className=" hover:text-white">
              Scan Batik
            </Link>
            <Link href="/list" className=" hover:text-white">
              Batik List
            </Link>
            <Link href="/search" className=" hover:text-white">
              History Search
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Profile</h1>
          <div className="text-sm text-gray-300">
            <h4>Ade Ripaldi Nuralim</h4>
            <h4>Adi Purnama</h4>
            <h4>Denis Firmansyah</h4>
            <h4>Dimas Arya Nurhakim</h4>
            <h4>Devi Mulyana</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
