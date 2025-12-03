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
}

const SEO: React.FC<SEOProps> = ({
  title = 'Fintrex | AI Accounting Automation for Indian CAs',
  description = 'Automate accounting workflows with AI-powered invoice extraction, GST filing, and real-time financial reporting. Built for Chartered Accountants in India. Zero manual data entry, 99% accuracy.',
  keywords = 'accounting automation, AI accounting, GST filing, invoice extraction, CA software, Indian accounting, Tally integration, WhatsApp accounting, automated bookkeeping, financial reporting',
  ogImage = 'https://fintrex.ai/og-image.png',
  ogType = 'website',
  canonical = 'https://fintrex.ai',
  schema
}) => {
  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fintrex",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    },
    "description": description,
    "image": ogImage,
    "publisher": {
      "@type": "Organization",
      "name": "Fintrex AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fintrex.ai/logo.png"
      }
    },
    "featureList": [
      "AI-powered invoice extraction",
      "WhatsApp integration",
      "Automated GST filing",
      "Real-time financial reporting",
      "Tally integration",
      "Secure data management"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fintrex" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@fintrexai" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Fintrex AI" />
      
      {/* Geo Tags for India */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
