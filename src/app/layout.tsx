import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import NavLayout from "@/components/NavLayout/NavLayout";
// import Navbar from "@/components/Navbar";
// import useThemeStore from "@/stores/theme";
import "./globals.css";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeLume",
  description: "This is an official website",
};

const ClientRootLayout = dynamic(() => import('./ClientRootLayout'), {
  loading: () => (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} />
    </html>
  )
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
