import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub — Твій розумний записник",
  description:
    "Зручний застосунок для створення, зберігання та керування вашими нотатками в хмарі.",

  openGraph: {
    title: "NoteHub — Твій розумний записник",
    description:
      "Зберігайте свої ідеї безпечно та доступно з будь-якого пристрою.",
    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Прев'ю інтерфейсу NoteHub",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NoteHub — Твій розумний записник",
    description:
      "Зберігайте свої ідеї безпечно та доступно з будь-якого пристрою.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
