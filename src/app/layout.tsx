import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/shared";

export const metadata: Metadata = {
  title: "The Chop Shop - Walk-ins Welcome",
  description: "Classic barbershop with vintage charm. Walk-ins welcome for fresh cuts and clean looks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
