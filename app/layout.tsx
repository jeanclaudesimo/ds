import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DigitalSolutions - Ihr Partner für digitale Transformation",
    template: "%s | DigitalSolutions",
  },
  description:
    "Professionelle Webentwicklung, Landing Pages und Web-Applikationen. Wir transformieren Ihre digitalen Ideen in innovative Lösungen mit modernsten Technologien.",
  keywords: [
    "Webentwicklung",
    "Web Development",
    "Landing Pages",
    "Web Applikationen",
    "E-Commerce",
    "Next.js",
    "React",
    "PHP",
    "Laravel",
    "Digitale Transformation",
  ],
  authors: [{ name: "DigitalSolutions" }],
  creator: "DigitalSolutions",
  metadataBase: new URL("https://digitalssolutions.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://digitalssolutions.de",
    title: "DigitalSolutions - Ihr Partner für digitale Transformation",
    description:
      "Professionelle Webentwicklung, Landing Pages und Web-Applikationen.",
    siteName: "DigitalSolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalSolutions - Ihr Partner für digitale Transformation",
    description:
      "Professionelle Webentwicklung, Landing Pages und Web-Applikationen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
