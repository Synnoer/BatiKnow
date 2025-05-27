import Link from "next/link";

import React from "react";

export const Footer = (): React.ReactElement => {
    return (
        <div className="flex justify-around text-wrap pt-10 pb-24 sm:pb-10 bg-red-800 text-white">
            <div>
                <h3 className="text-lg font-bold">BatiKnow</h3>
                <p className="text-sm text-gray-300 max-w-40">Kunjungi BatiKnow dan perluas wawasanmu tentang beragam motif, teknik, dan filosofi batik dari seluruh Indonesia</p>
            </div>
            <div>
                <h3 className="text-lg font-bold">Explore</h3>
                <div className="flex flex-col text-sm text-gray-300">
                    <Link href="/" className=" hover:text-white">Home</Link>
                    <Link href="/scan" className=" hover:text-white">Scan Batik</Link>
                    <Link href="/list" className=" hover:text-white">Batik List</Link>
                    <Link href="/region" className=" hover:text-white">Region List</Link>
                    <Link href="/search" className=" hover:text-white">Search Batik</Link>
                </div>
            </div>
            <div>
                <h1 className="text-lg font-bold">Profile</h1>
                <div className="text-sm text-gray-300">
                    <h4>Ade Ripaldi Nuralim</h4>
                    <h4>Adi Purnama</h4>
                    <h4>Denis Firmansyah</h4>
                    <h4>Dimas Arya Nurhakim</h4>
                    <h4>Devi Mulyana</h4>
                </div>
            </div>
        </div>
    )
}