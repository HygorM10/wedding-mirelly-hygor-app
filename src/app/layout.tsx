import "./globals.css";

import { Montserrat, Playfair_Display } from "next/font/google";

import type { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mirelly & Hygor",
  description: "Site do Casamento de Mirelly & Hygor",
  metadataBase: new URL('https://www.mirellyehygor.com.br'),
  openGraph: {
    title: "Mirelly & Hygor",
    description: "Site do Casamento de Mirelly & Hygor",
    url: 'https://www.mirellyehygor.com.br',
    siteName: 'Mirelly & Hygor',
    images: [
      {
        url: '/main-principal.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mirelly e Hygor',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${playfair.variable} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
