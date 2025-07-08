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

export const metadata: Metadata = {
  title: "Ourovance - The Future of Health is Coming",
  description: "Ourovance is pioneering the future of health technology with innovative solutions for wellness and healthcare. Experience the next generation of health tech.",
  keywords: "health tech, wellness, healthcare technology, medical innovation, health solutions",
  openGraph: {
    title: "Ourovance - The Future of Health is Coming",
    description: "Ourovance is pioneering the future of health technology with innovative solutions for wellness and healthcare.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
