import type { Metadata } from "next";
import { Share_Tech, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const shareTechSans = Share_Tech({
  variable: "--font-share-tech-sans",
  subsets: ["latin"],
  weight: "400",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Seneca Software Developers Club",
  description: "SSDC Website",
  openGraph: {
    type: "website",
    url: "",
    title: "Seneca Software Developers Club",
    description: "SSDC Website",
    locale: "en_CA",
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
  icons: {
    shortcut: "ssdc.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechSans.variable} ${shareTechMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
