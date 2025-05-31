import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "react-hot-toast";
import { NavBar } from "./component/navigation";
import { AuthProvider } from "@/context/AuthContext";

config.autoAddCss = false;

const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "BatiKnow",
  description: "BatiKnow App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          suppressHydrationWarning
          className={`${poppinsSans.className} antialiased flex flex-col min-h-screen bg-gray-100`}
        >
          <Toaster />
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
