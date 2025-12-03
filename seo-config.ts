// Meta Tags Reference for Fintrex
// Use this as a guide when updating SEO across the site

export const SITE_CONFIG = {
  // Base URL (Update for production)
  url: 'https://fintrex.ai',
  
  // Site Identity
  name: 'Fintrex',
  fullName: 'Fintrex - AI Accounting Automation',
  tagline: 'AI Accounting Automation for Indian CAs',
  
  // Default Meta
  defaultTitle: 'Fintrex | AI Accounting Automation for Indian CAs',
  defaultDescription: 'Automate accounting workflows with AI-powered invoice extraction, GST filing, and real-time financial reporting. Built for Chartered Accountants in India. Zero manual data entry, 99% accuracy.',
  defaultKeywords: 'accounting automation, AI accounting, GST filing, invoice extraction, CA software, Indian accounting, Tally integration, WhatsApp accounting, automated bookkeeping, financial reporting',
  
  // Images (Update with actual paths)
  logo: '/logo.png',
  ogImage: '/og-image.png', // 1200x630px
  favicon: '/favicon.svg',
  appleTouchIcon: '/apple-touch-icon.png', // 180x180px
  
  // Social
  twitter: '@fintrexai',
  linkedin: 'company/fintrex',
  
  // Company Info
  company: {
    name: 'Fintrex AI',
    email: 'hello@fintrex.ai',
    phone: '+91-XXX-XXX-XXXX',
    address: 'India',
  },
  
  // Theme
  themeColor: '#00ff88',
  backgroundColor: '#000000',
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'Fintrex | AI Accounting Automation for Indian CAs',
    description: 'Automate 70% of your accounting work with AI. Zero manual data entry, instant GST filing, and 99.9% accuracy. Join 150+ CAs who\'ve transformed their practice.',
    keywords: 'AI accounting, CA automation, GST filing, invoice automation, accounting software India',
    schema: {
      '@type': 'SoftwareApplication',
      'applicationCategory': 'FinanceApplication',
    },
  },
  
  features: {
    title: 'Features | Fintrex AI Accounting Automation',
    description: 'Discover Fintrex features: WhatsApp integration, AI invoice extraction, automated vendor management, and one-click financial reports. Built for modern CA practices.',
    keywords: 'WhatsApp accounting, OCR invoice, vendor management, financial reports, AI features',
    schema: {
      '@type': 'ItemList',
      'itemListElement': [
        { '@type': 'ListItem', position: 1, name: 'WhatsApp Integration' },
        { '@type': 'ListItem', position: 2, name: 'AI Document Extraction' },
        { '@type': 'ListItem', position: 3, name: 'Vendor Management' },
        { '@type': 'ListItem', position: 4, name: 'Financial Reports' },
      ],
    },
  },
  
  faq: {
    title: 'FAQ | Fintrex - Your Questions Answered',
    description: 'Get answers to common questions about Fintrex AI accounting automation. Learn about pricing, security, integrations, and how we help CA firms scale.',
    keywords: 'Fintrex FAQ, accounting automation questions, CA software help, pricing, security',
    schema: {
      '@type': 'FAQPage',
      'mainEntity': [], // Populated from FAQS_FULL
    },
  },
};

// Structured Data Templates
export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Fintrex AI',
    'url': 'https://fintrex.ai',
    'logo': 'https://fintrex.ai/logo.png',
    'description': 'AI-powered accounting automation for Indian Chartered Accountants',
    'sameAs': [
      'https://twitter.com/fintrexai',
      'https://linkedin.com/company/fintrex',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-XXX-XXX-XXXX',
      'contactType': 'Customer Service',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi'],
    },
  },
  
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Fintrex',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web, Android, iOS',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '150',
    },
  },
  
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://fintrex.ai',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Features',
        'item': 'https://fintrex.ai#features',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'FAQ',
        'item': 'https://fintrex.ai#faq',
      },
    ],
  },
};

// Open Graph configurations
export const OG_CONFIG = {
  siteName: 'Fintrex',
  type: 'website',
  locale: 'en_IN',
  imageWidth: 1200,
  imageHeight: 630,
};

// Twitter Card configurations
export const TWITTER_CONFIG = {
  cardType: 'summary_large_image',
  site: '@fintrexai',
  creator: '@fintrexai',
};

// Keywords by category
export const KEYWORDS = {
  primary: [
    'accounting automation',
    'AI accounting',
    'CA software India',
    'GST filing automation',
    'invoice extraction',
  ],
  secondary: [
    'Tally integration',
    'WhatsApp accounting',
    'automated bookkeeping',
    'financial reporting',
    'chartered accountant software',
  ],
  longTail: [
    'AI powered accounting software for CAs',
    'automate GST filing India',
    'WhatsApp invoice collection for accountants',
    'reduce manual data entry accounting',
    'scalable CA practice management',
  ],
};

// Target Audience Keywords
export const AUDIENCE_KEYWORDS = [
  'chartered accountants India',
  'CA firms',
  'accounting practices',
  'tax consultants',
  'bookkeeping services',
  'GST practitioners',
  'financial advisors',
  'small accounting firms',
  'mid-size CA practices',
];

// Feature-specific keywords
export const FEATURE_KEYWORDS = {
  whatsapp: ['WhatsApp integration', 'WhatsApp invoice', 'document collection', 'client communication'],
  ai: ['AI extraction', 'OCR technology', 'machine learning', 'automated data entry'],
  gst: ['GST filing', 'GSTR automation', 'tax compliance', 'ITR filing'],
  tally: ['Tally integration', 'Tally export', 'accounting software sync'],
  security: ['bank-grade security', 'data encryption', 'SOC 2 compliance', 'secure accounting'],
};
