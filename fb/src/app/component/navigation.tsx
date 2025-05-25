'use client'

import { faCamera, faHome, faListUl, faMap, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export const NavBar = (): React.ReactElement => {
    const router = useRouter()

    return (
        <div id="navbar" className="sticky top-0 rounded-b-lg sm:rounded-none sm:pt-4 bg-red-800">
            <div className="border-1 rounded-b-lg sm:rounded-none sm:mx-10 p-2 bg-white shadow-md">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-bold text-2xl text-red-500">BatiKnow</Link>
                    <div className="flex gap-2">
                        <div className="hidden sm:flex gap-2 items-center text-black text-center">
                            <Link href="/" className="hover:text-red-500">Home</Link>
                            <Link href="/scan" className="hover:text-red-500">Scan</Link>
                            <Link href="/list" className="hover:text-red-500">List</Link>
                            <Link href="/region" className="hover:text-red-500">Region</Link>
                            <Link href="/" className="bg-red-500 text-white hover:bg-red-800 rounded-full p-1 w-9 h-9 flex items-center justify-center">
                                <FontAwesomeIcon icon={faSearch} />
                            </Link>
                        </div>
                        <button type="button" onClick={() => router.push('auth/login')} className="cursor-pointer rounded-2xl px-4 py-1 bg-red-500 text-white hover:bg-red-800">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed flex justify-evenly bottom-0 w-full py-2 rounded-t-lg text-xl bg-red-900 sm:hidden">
                <Link href="/" className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"><FontAwesomeIcon icon={faHome} /></Link>
                <Link href="/list" className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"><FontAwesomeIcon icon={faListUl} /></Link>
                <Link href="/scan" className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"><FontAwesomeIcon icon={faCamera} /></Link>
                <Link href="/region" className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"><FontAwesomeIcon icon={faMap} /></Link>
                <Link href="/" className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"><FontAwesomeIcon icon={faSearch} /></Link>
            </div>
        </div>
    )
}