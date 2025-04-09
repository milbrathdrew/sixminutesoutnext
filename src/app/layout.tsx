import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Base SEO constants
const SITE_NAME = 'Six Minutes Out PR';
const BASE_TITLE = 'Strategic PR & Affiliate Management';
const BASE_DESCRIPTION = 'Six Minutes Out PR specializes in strategic public relations and affiliate program management for small business consumer products. Elevate your brand visibility and drive sales through targeted media coverage and affiliate relationships.';
const BASE_URL = 'https://sixminutesout.com'; // Update with actual domain

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${BASE_TITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: BASE_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: {
      default: `${SITE_NAME} | ${BASE_TITLE}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: BASE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${SITE_NAME} | ${BASE_TITLE}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: BASE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 