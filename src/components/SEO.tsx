'use client';

import React from 'react';
import { Metadata } from 'next';

// Define base SEO constants
const SITE_NAME = 'Six Minutes Out PR';
const BASE_TITLE = 'Strategic PR & Affiliate Management';
const BASE_DESCRIPTION = 'Six Minutes Out PR specializes in strategic public relations and affiliate program management for small business consumer products. Elevate your brand visibility and drive sales through targeted media coverage and affiliate relationships.';
const BASE_URL = 'https://sixminutesout.com'; // Update with actual domain

// TypeScript interfaces for SEO props
interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
}

// Default SEO component
export default function SEO({
  title,
  description = BASE_DESCRIPTION,
  canonicalPath,
  ogImage = '/images/og-default.jpg',
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${BASE_TITLE}`;
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : BASE_URL;

  // Structured data for the website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": SITE_NAME,
    "description": description,
    "url": BASE_URL,
    "priceRange": "$$",
    "serviceType": ["Public Relations", "Affiliate Marketing Management"],
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:site_name" content={SITE_NAME} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
      
      {/* Robots Meta Tag */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
} 