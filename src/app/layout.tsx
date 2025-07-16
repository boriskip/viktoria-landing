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
  title: "Friseurin Duisburg | Farben & Haarschnitt | Viktoria Studio",
  description: "Professionelle Friseurin in Duisburg: Haarschnitt, Farben, Balayage, Styling. Jetzt Termin vereinbaren!",
  keywords: [
    "Friseurin Duisburg",
    "Farben Duisburg",
    "Haarschneiden Duisburg",
    "Balayage Duisburg",
    "Friseur Studio Duisburg",
    "Viktoria Studio",
    "Damenfriseur Duisburg",
    "Haarfarbe Duisburg",
    "Styling Duisburg"
  ],
  openGraph: {
    title: "Friseurin Duisburg | Farben & Haarschnitt | Viktoria Studio",
    description: "Professionelle Friseurin in Duisburg: Haarschnitt, Farben, Balayage, Styling. Jetzt Termin vereinbaren!",
    url: "https://viktoria-landing.vercel.app/",
    siteName: "Viktoria Studio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Friseurin Duisburg - Viktoria Studio"
      }
    ],
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@viktoriastudio", // если есть Twitter-аккаунт
    title: "Friseurin Duisburg | Farben & Haarschnitt | Viktoria Studio",
    description: "Professionelle Friseurin in Duisburg: Haarschnitt, Farben, Balayage, Styling. Jetzt Termin vereinbaren!",
    images: ["/avatar.jpg"]
  },
  metadataBase: new URL("https://viktoria-landing.vercel.app/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google site verification (пример, заменить на свой) */}
        {/* <meta name="google-site-verification" content="ВАШ_КОД_ПОДТВЕРЖДЕНИЯ" /> */}
        {/* Facebook Open Graph fallback */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        {/* Twitter Card fallback */}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
