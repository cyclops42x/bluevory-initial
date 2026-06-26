import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Actualizamos los metadatos aquí
export const metadata: Metadata = {
  title: "Bluevory",
  description: "New experience",
  openGraph: {
    title: "Bluevory",
    description: "New experience",
    url: "https://www.bluevory.com",
    siteName: "Bluevory",
    images: [
      {
        url: "https://www.bluevory.com/og-image.png", // Asegúrate de que esta URL sea la correcta
        width: 1200,
        height: 630,
        alt: "Bluevory - New experience",
      },
    ],
    locale: "es_PE", // O "en_US" dependiendo del idioma principal de tu web
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}