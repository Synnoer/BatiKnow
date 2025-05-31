"use client";

import {
  faCamera,
  faCaretDown,
  faCaretRight,
  faHome,
  faListUl,
  faMap,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export const NavBar = (): React.ReactElement => {
  const { user, isLoggedIn, logout, loading } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Bikin animasi muncul setelah mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event!.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="sticky top-0 z-10- rounded-b-lg sm:rounded-none sm:pt-4 bg-red-800 z-50"
    >
      <div className="border-1 rounded-b-lg sm:rounded-none p-2 bg-white shadow-md max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-red-500">
            BatiKnow
          </Link>
          <div className="flex gap-2">
            <div className="hidden sm:flex gap-2 items-center text-black text-center">
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
              <Link href="/scan" className="hover:text-red-500">
                Scan
              </Link>
              <Link href="/list" className="hover:text-red-500">
                List
              </Link>
              <Link href="/region" className="hover:text-red-500">
                Region
              </Link>
            </div>
            {isLoggedIn ? (
              <button
                type="button"
                disabled={loading}
                onClick={logout}
                className="cursor-pointer rounded-2xl px-4 py-1 bg-red-500 text-white hover:bg-red-800 disabled:bg-red-400 hidden sm:block"
              >
                Sign Out
              </button>
            ) : (
              ""
            )}

            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    isLoggedIn ? setIsOpen(true) : router.push("auth/login")
                  }
                  className="cursor-pointer rounded-2xl px-4 py-1 bg-red-500 text-white hover:bg-red-800"
                >
                  {user?.name ?? "Sign In"}
                  {isLoggedIn ? (
                    <div className="inline-block sm:hidden">
                      <FontAwesomeIcon
                        icon={isOpen ? faCaretRight : faCaretDown}
                        className="ml-2"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="inline-block sm:hidden origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
        fixed bottom-0 w-full py-2 bg-red-900 text-xl rounded-t-lg sm:hidden flex justify-evenly
        transform transition-transform duration-500
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
      >
        <Link
          href="/"
          className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          href="/list"
          className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"
        >
          <FontAwesomeIcon icon={faListUl} />
        </Link>
        <Link
          href="/scan"
          className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"
        >
          <FontAwesomeIcon icon={faCamera} />
        </Link>
        <Link
          href="/region"
          className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"
        >
          <FontAwesomeIcon icon={faMap} />
        </Link>
        <Link
          href="/search"
          className="flex hover:bg-white hover:text-red-500 hover:text-2xl rounded-full p-6 w-9 h-9 items-center justify-center"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </div>
    </div>
  );
};
