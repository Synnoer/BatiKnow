import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSearch, faListUl, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export const Service = (): React.ReactElement => {
    return (
        <div id="service" className="flex flex-col items-center p-10">
            <h2 className="text-red-600 text-3xl font-bold mb-5">Fitur Utama</h2>
            <div className="flex break-words px-2 pt-2 justify-evenly text-center text-xs text-white">
                <div className=" max-w-40 px-2">
                    <Link href="/scan" className="  bg-red-500 hover:text-red-500 hover:bg-white rounded-full p-2 text-xl"><FontAwesomeIcon icon={faCamera} /></Link>
                    <p className="text-black mt-4">Scan Batik</p>
                    <p className="hidden sm:block text-black">Identifikasi motif batik dan dapatkan informasi instan</p>
                </div>
                <div className="inline-block max-w-40 px-2">
                    <Link href="/search" className=" bg-red-500 hover:text-red-500 hover:bg-white rounded-full p-2 text-xl"><FontAwesomeIcon icon={faSearch} /></Link>
                    <p className="text-black mt-4">Pencarian Cepat</p>
                    <p className="hidden sm:block text-black">Temukan batik berdasarkan nama atau asal daerah.</p>
                </div>
                <div className="inline-block max-w-40 px-2">
                    <Link href="/list" className=" bg-red-500 hover:text-red-500 hover:bg-white rounded-full p-2 text-xl"><FontAwesomeIcon icon={faListUl} /></Link>
                    <p className="text-black mt-4">Koleksi Lengkap</p>
                    <p className="hidden sm:block text-black">Telusuri ribuan batik berdasarkan nama dan daerah.</p>
                </div>
                <div className="inline-block max-w-40 px-2">
                    <Link href="/history" className=" bg-red-500 hover:text-red-500 hover:bg-white rounded-full p-2 text-xl"><FontAwesomeIcon icon={faClockRotateLeft} /></Link>
                    <p className="text-black mt-4">Riwayat Scan</p>
                    <p className="hidden sm:block text-black">Akses kembali batik yang pernah Anda identifikasi.</p>
                </div>
            </div>
        </div>
    )
}