import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSearch,
  faListUl,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export const Service = (): React.ReactElement => {
  return (
    <div id="service" className="max-w-6xl p-10 mx-auto">
      <h2 className="text-red-600 text-3xl font-bold mb-5 text-center">Fitur Utama</h2>
      <div className="grid grid-cols-4 px-2 pt-2 justify-center text-center text-white">
        <div className="flex flex-col items-center max-w-xl px-2">
          <Link
            href="/scan"
            className="bg-red-500 hover:text-red-500 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            <FontAwesomeIcon icon={faCamera} />
          </Link>
          <h3 className="text-lg font-bold text-black mt-4 sm:mb-4">Scan Batik</h3>
          <p className="hidden sm:block text-black">
            Identifikasi motif batik dan dapatkan informasi instan
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xl px-2">
          <Link
            href="/list"
            className="bg-red-500 hover:text-red-500 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <h3 className="text-lg font-bold text-black mt-4 sm:mb-4">Pencarian Cepat</h3>
          <p className="hidden sm:block text-black">
            Temukan batik berdasarkan nama atau asal daerah.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xl px-2">
          <Link
            href="/list"
            className="bg-red-500 hover:text-red-500 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            <FontAwesomeIcon icon={faListUl} />
          </Link>
          <h3 className="text-lg font-bold text-black mt-4 sm:mb-4">Koleksi Lengkap</h3>
          <p className="hidden sm:block text-black">
            Telusuri ribuan batik berdasarkan nama dan daerah.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xl px-2">
          <Link
            href="/history"
            className="bg-red-500 hover:text-red-500 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </Link>
          <h3 className="text-lg font-bold text-black mt-4 sm:mb-4">Riwayat Scan</h3>
          <p className="hidden sm:block text-black">
            Akses kembali batik yang pernah Anda identifikasi.
          </p>
        </div>
      </div>
    </div>
  );
};
