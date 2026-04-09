'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  noIndex = false,
}: SEOHeadProps) {
  const router = useRouter();
  const fullTitle = title ? `${title} | GreenKids` : 'GreenKids - Workshop Tái Ché Sáng Táo Cho Tré';
  const url = canonicalUrl || `https://greenkids.vn${router.asPath}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "GreenKids là chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong."} />
      <meta name="keywords" content={keywords || "workshop tái ché, tái ché sáng táo, lop hoc lam tu tay, tré em, bào vê môi truong, greenkids"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || "GreenKids là chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong."} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage || "https://greenkids.vn/frame/Frame 1.png"} />
      <meta property="og:site_name" content="GreenKids" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || "GreenKids là chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong."} />
      <meta name="twitter:image" content={ogImage || "https://greenkids.vn/frame/Frame 1.png"} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Additional SEO */}
      <meta name="author" content="GreenKids Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="vi" />
    </Head>
  );
}
