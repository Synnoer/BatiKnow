'use client'

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export const NavBar = (): React.ReactElement => {
    const router = useRouter()

    return (
        <div id="navbar" className="sticky px-10 pt-4 bg-red-800">
            <div className="p-2 bg-white">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-bold text-2xl text-red-500">BatiKnow</Link>
                    <div className="hidden sm:flex gap-2 items-center text-black text-center">
                        <Link href="/" className="hover:text-red-500">Home</Link>
                        <Link href="/scan" className="hover:text-red-500">Scan</Link>
                        <Link href="/list" className="hover:text-red-500">List</Link>
                        <Link href="/region" className="hover:text-red-500">Region</Link>
                        <Link href="/" className="bg-red-500 text-white hover:bg-red-800 rounded-full p-2 w-9 h-9 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                        <button type="button" onClick={() => router.push('auth/login')} className="cursor-pointer rounded-2xl px-4 py-1 bg-red-500 text-white hover:bg-red-800">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}