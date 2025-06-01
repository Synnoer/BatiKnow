"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "@/utils/auth"; // calls /api/me
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export type User = {
  uuid: string;
  username: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  register: (name: string, username: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
  register: async () => Promise.resolve(),
  login: async () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const register = async (name: string, username: string, password: string) => {
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ name, username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { message, user } = await res.json();
      toast.success(message);
      setUser(user);
      router.push("/");
    } else {
      const { error } = await res.json();
      toast.error(error);
    }
    setLoading(false);
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { message, user } = await res.json();
      toast.success(message);
      setUser(user);
      router.replace("/");
    } else {
      const { error } = await res.json();
      toast.error(error);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    const res = await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    toast.success(data.message);
    setUser(null);
    router.replace("/");
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isLoggedIn: !!user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
