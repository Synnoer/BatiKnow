"use client";

import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { message } = await res.json();
      toast.success(message);
      router.push("/");
    } else {
      const { error } = await res.json();
      toast.error(error);
    }
  }

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-8">Masuk Akun</h1>
        <p className="text-2xl text-left mt-2">
          Selamat datang di <strong className="text-red-500">BatiKnow!</strong>
        </p>
          <p className="text-left mb-2">
            Jelajahi dunia batik di Indonesia bersama kami.
          </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faUser} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="username"
              className="w-full pl-10 pr-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"  
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              className="w-full pl-10 pr-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-red-500 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
        >
          Sign In
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?
            <Link
              
              href="/auth/register"
              className="text-red-500 hover:text-red-800 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
