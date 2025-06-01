import type { Metadata } from "next";
import "tailwindcss";

export const metadata: Metadata = {
  title: "Autentikasi",
  description: "Form Login Register",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 flex flex-grow items-center justify-center">
      {children}
    </div>
  );
}
