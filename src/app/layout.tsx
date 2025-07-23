import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { aileron, chromate } from '@/styles/fonts';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Six Minutes Out PR",
  description: "Strategic PR & Affiliate Management for Consumer Products",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      // Use SVG placeholders for now, you'll need to convert these to PNG later
      { url: '/icons/icon-192.png.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-512.png.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/apple-icon-180.png.svg', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/icons/apple-icon-180.png.svg' },
      { rel: 'mask-icon', url: '/icons/mask-icon.svg', color: '#687964' }
    ],
  },
  manifest: '/manifest.json',
  applicationName: 'Six Minutes Out PR',
  themeColor: '#687964',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aileron.variable} ${chromate.variable} font-sans antialiased min-h-screen flex flex-col bg-light`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script
          id="glance-cobrowse"
          data-groupid="21483"
          data-site="staging"
          src="https://www.glancecdn.net/cobrowse/CobrowseJS.ashx?groupid=21483&site=staging&script=XDOM"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
