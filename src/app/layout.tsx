import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeLume",
  description: "This is an official website",
};

const ClientRootLayout = dynamic(() => import('./ClientRootLayout'), {
  loading: () => (
    <html lang="en">
      <body className="font-sans font-mono" />
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
