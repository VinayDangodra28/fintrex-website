import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: Record<string, any>;
  pageName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Fintrex | AI Accounting Automation for Indian CAs',
  description = 'Meet Fin, your AI accounting assistant. Automate 70% of accounting work with AI-powered invoice extraction, GST filing, and real-time financial reporting. Built for Chartered Accountants in India. Zero manual data entry, 99.9% accuracy.',
  keywords = 'AI accounting assistant, Fin AI, accounting automation, AI accounting, GST filing, invoice extraction, CA software, Indian accounting, Tally integration, WhatsApp accounting, automated bookkeeping, financial reporting, chartered accountant software, AI invoice OCR',
  ogImage = 'https://fintrex.ai/fintrex-og-image.png',
  ogType = 'website',
  canonical = 'https://fintrex.ai',
  schema,
  pageName = 'Home'
}) => {
  // Comprehensive Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fintrex AI",
    "alternateName": "Fintrex",
    "url": "https://fintrex.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fintrex.ai/fintrex-logo.png",
      "width": "512",
      "height": "512"
    },
    "description": "AI-powered accounting automation platform featuring Fin, an AI assistant that automates invoice extraction, GST filing, and financial reporting for Chartered Accountants in India",
    "foundingDate": "2024",
    "founders": [{
      "@type": "Person",
      "name": "Fintrex Team"
    }],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://twitter.com/fintrexai",
      "https://linkedin.com/company/fintrex"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  // Software Application Schema with Fin AI Assistant
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fintrex",
    "alternateName": "Fintrex AI Accounting Platform",
    "applicationCategory": "FinanceApplication",
    "applicationSubCategory": "Accounting Software",
    "operatingSystem": "Web, Android, iOS",
    "softwareVersion": "1.0",
    "releaseNotes": "Featuring Fin - AI accounting assistant with 99.9% accuracy",
    "offers": {
      "@type": "Offer",
      "price": "1599",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "Fintrex AI"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": description,
    "image": ogImage,
    "screenshot": [
      "https://fintrex.ai/screenshots/dashboard.png",
      "https://fintrex.ai/screenshots/fin-ai-assistant.png",
      "https://fintrex.ai/screenshots/invoice-extraction.png"
    ],
    "featureList": [
      "Fin AI Assistant - 24/7 automated accounting",
      "AI-powered invoice extraction with 99.9% accuracy",
      "WhatsApp integration for document collection",
      "Automated GST filing and compliance",
      "Real-time financial reporting",
      "Tally and accounting software integration",
      "Secure data management with SOC 2 compliance",
      "Automated vendor management with fuzzy matching",
      "Multi-channel document upload",
      "GL code mapping automation"
    ],
    "author": {
      "@type": "Organization",
      "name": "Fintrex AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fintrex.ai/fintrex-logo.png"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Fintrex AI"
    }
  };

  // Product Schema for Fin AI Assistant
  const finAISchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fin - AI Accounting Assistant",
    "description": "Fin is an AI-powered accounting assistant that processes invoices, validates data, and ensures compliance 24/7. Works tirelessly to automate routine accounting tasks with superhuman accuracy.",
    "brand": {
      "@type": "Brand",
      "name": "Fintrex",
      "logo": "https://fintrex.ai/fintrex-logo.png"
    },
    "image": "https://fintrex.ai/fin-ai-assistant.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fintrex",
    "alternateName": "Fintrex AI Accounting",
    "url": "https://fintrex.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fintrex.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fintrex.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": canonical
      }
    ]
  };

  // Combine all schemas
  const combinedSchema = schema || [
    organizationSchema,
    softwareSchema,
    finAISchema,
    websiteSchema,
    breadcrumbSchema
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Enhanced Brand Meta Tags */}
      <meta name="application-name" content="Fintrex" />
      <meta name="apple-mobile-web-app-title" content="Fintrex" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Fintrex - AI Accounting Automation with Fin AI Assistant" />
      <meta property="og:site_name" content="Fintrex" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fintrexai" />
      <meta name="twitter:creator" content="@fintrexai" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Fintrex AI Accounting Platform" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="Fintrex AI" />
      <meta name="category" content="Finance, Accounting, Technology, AI, Automation" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Geo Tags for India */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* PWA Meta Tags */}
      <meta name="theme-color" content="#00ff88" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/fintrex-favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/fintrex-icon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fintrex-icon-16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/fintrex-apple-touch-icon.png" />
      <link rel="mask-icon" href="/fintrex-safari-pinned-tab.svg" color="#00ff88" />
      
      {/* Structured Data - Multiple Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
