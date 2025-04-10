import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { aileron, chromate } from '@/styles/fonts';

export const metadata: Metadata = {
  title: "Six Minutes Out PR",
  description: "Strategic PR & Affiliate Management for Consumer Products",
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
      </body>
    </html>
  );
}
