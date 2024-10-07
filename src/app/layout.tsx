import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteDescription: string = "Адамзаттың асыл тәжі болған, Алланың сүйіктісі әрі соңғы елшісі, пайғамбарымыз Мұхаммед Мұстафа (оған Алланың игілігі мен сәлемі болсын) өмірбаянын үйренуге арналған қосымша. Видеосабақты тыңдап қана қоймай алған біліміңізді тексеру үшін кішігірім емтихан тапсыруыңызға болады. Одан бөлек намаз уақыттары мен қыбла анықтау функциясы да қосылған. Қосымшаны AppStore және PlayMarket алаңдарынан жүктей аласыз"
const siteShortTitle: string = "Seerah.kz"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Seerah.kz - пайғамбарымыз Мұхаммед Мұстафа(ﷺ) өмірбаянын үйренуге арналған қосымша.",
  description: siteDescription,
  keywords: "Seerah, Адамзаттың Асыл Тәжі, Алланың Елшісі, Сира, Нұрсұлтан Рысмағамбет, Намаз Уақыты, Құбыла, Видеосабақтар, вопросы, ответы, намаз, Мухаммад, Мұхаммед",
  twitter: {
    title: siteShortTitle,
    description: siteDescription,
    card: "summary_large_image"
  },
  openGraph: {
    title: siteShortTitle,
    type: "website",
    url: "https://seerah.kz",
    images: ["https://seerah.kz/thumb.png"],
    description: siteDescription,

  }
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
    <head>
      <title> Seerah.kz - пайғамбарымыз Мұхаммед Мұстафа(ﷺ) өмірбаянын үйренуге арналған қосымша.</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"/>
    </head>
    <body>
    <Navbar/>
    {children}
    </body>
    </html>
  );
}
