export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: LegalSection[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export const PRIVACY_POLICY: LegalDocument = {
  id: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: '2024-12-01',
  effectiveDate: '2024-12-01',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `
Fintrex AI Private Limited ("Fintrex", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered accounting automation platform and related services (collectively, the "Services").

By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Services.
      `,
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: `
### Personal Information
We may collect personal information that you voluntarily provide, including:
- **Account Information**: Name, email address, phone number, professional credentials (CA membership number)
- **Business Information**: Firm name, business address, GSTIN, PAN
- **Payment Information**: Billing address, payment method details (processed by secure third-party providers)
- **Communication Data**: Messages, support tickets, feedback

### Client Data
When you use our Services to process documents for your clients:
- **Financial Documents**: Invoices, receipts, bank statements uploaded for processing
- **Business Information**: Vendor details, transaction data, GST information
- **Identification Documents**: PAN, Aadhaar (as required for compliance)

### Automatically Collected Information
- **Device Information**: Browser type, operating system, device identifiers
- **Usage Data**: Pages visited, features used, time spent on platform
- **Log Data**: IP address, access times, referring URLs

### WhatsApp Integration Data
When you connect WhatsApp:
- **Message Content**: Documents and images sent for processing
- **Contact Information**: Phone numbers of clients who send documents
      `,
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      content: `
We use collected information for:

### Service Delivery
- Process and extract data from financial documents
- Provide AI-powered automation features
- Generate reports and insights
- Enable WhatsApp-based document collection

### Service Improvement
- Analyze usage patterns to improve features
- Train and improve our AI models (using anonymized data)
- Conduct research and development

### Communication
- Send service notifications and updates
- Respond to support requests
- Provide product announcements (with your consent)

### Legal Compliance
- Comply with applicable laws and regulations
- Respond to legal requests
- Protect our rights and prevent fraud
      `,
    },
    {
      id: 'data-sharing',
      title: 'How We Share Your Information',
      content: `
We do NOT sell your personal information. We may share information with:

### Service Providers
Trusted third parties who assist in operating our Services:
- Cloud hosting providers (with India data residency)
- Payment processors
- Analytics services
- Customer support tools

### Legal Requirements
When required by law or to:
- Comply with legal processes
- Protect our rights and safety
- Prevent fraud or security threats

### Business Transfers
In connection with mergers, acquisitions, or asset sales, with appropriate confidentiality protections.

### With Your Consent
When you explicitly authorize sharing with specific third parties.
      `,
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `
We implement robust security measures:

### Technical Safeguards
- **Encryption**: AES-256 encryption at rest, TLS 1.3 in transit
- **Access Control**: Role-based access, multi-factor authentication
- **Monitoring**: 24/7 security monitoring and intrusion detection
- **Backups**: Regular encrypted backups with geographic redundancy

### Organizational Measures
- Employee background checks and training
- Confidentiality agreements
- Regular security audits
- Incident response procedures

### Compliance
- SOC 2 Type II certification (in progress)
- India data residency requirements
- GDPR-aligned practices

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
      `,
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: `
We retain your information as follows:

### Account Data
- Active accounts: Retained while account is active
- After termination: Deleted within 90 days, unless legally required

### Client Documents
- Retained for the duration you specify (default: 7 years for compliance)
- You may request earlier deletion
- Anonymized data may be retained for AI improvement

### Usage Data
- Retained for up to 24 months for analytics
- Anonymized after initial analysis period
      `,
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: `
You have the following rights regarding your data:

### Access and Portability
- Request a copy of your personal data
- Export your data in machine-readable format

### Correction
- Update or correct inaccurate information
- Request modification of incomplete data

### Deletion
- Request deletion of your personal data
- Subject to legal retention requirements

### Restriction
- Request limitation of processing in certain circumstances

### Objection
- Object to processing for marketing purposes
- Object to automated decision-making

### Withdraw Consent
- Withdraw consent where processing is based on consent
- Does not affect lawfulness of prior processing

To exercise these rights, contact us at privacy@fintrex.ai.
      `,
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: `
We use cookies and similar technologies:

### Essential Cookies
Required for basic platform functionality:
- Authentication
- Security
- Session management

### Analytics Cookies
Help us understand usage patterns:
- Page views and navigation
- Feature adoption
- Performance metrics

### Preference Cookies
Remember your settings:
- Language preferences
- Display settings

You can control cookies through your browser settings. Disabling certain cookies may affect functionality.
      `,
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: `
Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
      `,
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      content: `
Your data is primarily stored and processed in India. If we transfer data internationally, we ensure appropriate safeguards:
- Standard contractual clauses
- Adequacy decisions
- Your explicit consent

We prioritize India data residency for all financial and client data.
      `,
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: `
We may update this Privacy Policy periodically. Changes will be:
- Posted on this page with updated "Last Updated" date
- Communicated via email for material changes
- Effective upon posting unless otherwise stated

We encourage you to review this Policy regularly.
      `,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `
For privacy-related inquiries:

**Email**: privacy@fintrex.ai

**Data Protection Officer**:
Fintrex AI Private Limited
[Address to be updated]
India

**Response Time**: We aim to respond within 30 days.
      `,
    },
  ],
  seo: {
    metaTitle: 'Privacy Policy | Fintrex AI',
    metaDescription: 'Learn how Fintrex AI collects, uses, and protects your data. Our Privacy Policy explains our commitment to data security and your privacy rights.',
    keywords: ['privacy policy', 'data protection', 'Fintrex privacy', 'accounting data security'],
  },
};

export const TERMS_OF_SERVICE: LegalDocument = {
  id: 'terms-of-service',
  title: 'Terms of Service',
  lastUpdated: '2024-12-01',
  effectiveDate: '2024-12-01',
  sections: [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `
Welcome to Fintrex AI. These Terms of Service ("Terms") govern your access to and use of the Fintrex platform, including our website, applications, APIs, and related services (collectively, the "Services").

By creating an account or using our Services, you agree to be bound by these Terms. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.

If you do not agree to these Terms, you may not access or use the Services.
      `,
    },
    {
      id: 'services',
      title: 'Description of Services',
      content: `
Fintrex provides AI-powered accounting automation services, including:

### Core Features
- **Document Processing**: AI-powered extraction of data from invoices, receipts, and financial documents
- **WhatsApp Integration**: Collection of documents via WhatsApp messaging
- **Financial Reporting**: Automated generation of balance sheets, P&L statements, and GST reports
- **Vendor Management**: Intelligent vendor matching and master data management

### Service Levels
- Services are provided on an "as-is" and "as-available" basis
- We strive for 99.9% uptime but do not guarantee uninterrupted access
- AI accuracy targets are best-effort and may vary based on document quality

### Modifications
We reserve the right to modify, suspend, or discontinue any aspect of the Services with reasonable notice.
      `,
    },
    {
      id: 'accounts',
      title: 'User Accounts',
      content: `
### Registration
To use the Services, you must:
- Provide accurate and complete registration information
- Maintain the security of your account credentials
- Notify us immediately of any unauthorized access
- Be at least 18 years old

### Account Types
- **Individual**: For solo practitioners
- **Firm**: For accounting firms with multiple users
- **Enterprise**: For large organizations with custom requirements

### Account Responsibility
You are responsible for all activities under your account, including actions by users you authorize. We are not liable for losses arising from unauthorized access due to your failure to safeguard credentials.
      `,
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: `
You agree NOT to:

### Prohibited Actions
- Use the Services for any unlawful purpose
- Upload malicious code, viruses, or harmful content
- Attempt to gain unauthorized access to our systems
- Interfere with or disrupt the Services
- Reverse engineer or decompile our software
- Scrape or collect data from the Services without authorization
- Resell or redistribute the Services without written consent
- Use the Services to process fraudulent or illegal transactions
- Circumvent usage limits or billing mechanisms

### Content Standards
You are responsible for ensuring that content you upload:
- Does not violate third-party rights
- Is accurate and not misleading
- Complies with applicable laws and regulations
- Is authorized for processing

### Enforcement
Violation of these terms may result in account suspension or termination.
      `,
    },
    {
      id: 'data-ownership',
      title: 'Data and Intellectual Property',
      content: `
### Your Data
- You retain ownership of all data you upload ("Your Data")
- You grant us a limited license to process Your Data solely to provide the Services
- We may use anonymized, aggregated data to improve our AI models

### Our Intellectual Property
- The Services, including software, algorithms, designs, and content, are our property
- We grant you a limited, non-exclusive license to use the Services during your subscription
- You may not copy, modify, or create derivative works of our intellectual property

### Feedback
Any feedback or suggestions you provide may be used by us without compensation or obligation to you.
      `,
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      content: `
### Subscription Plans
- Services are offered on monthly or annual subscription basis
- Pricing is as displayed on our website at time of purchase
- We may modify pricing with 30 days notice for renewals

### Billing
- Fees are billed in advance for each subscription period
- Annual subscriptions are billed annually
- All fees are non-refundable except as required by law

### Payment Methods
- We accept major credit cards, UPI, and bank transfers
- You authorize us to charge your payment method for subscription fees
- Failed payments may result in service suspension

### Taxes
- Prices exclude applicable taxes (GST)
- You are responsible for all taxes associated with your use of the Services
      `,
    },
    {
      id: 'termination',
      title: 'Termination',
      content: `
### By You
- You may cancel your subscription at any time
- Access continues until the end of your current billing period
- You may request data export before termination

### By Us
We may suspend or terminate your account if you:
- Violate these Terms
- Fail to pay fees when due
- Engage in fraudulent or illegal activity
- Pose a security risk to the Services

### Effect of Termination
- Access to Services will be revoked
- Your Data will be retained for 30 days, then deleted
- Provisions that should survive will remain in effect
      `,
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      content: `
### As-Is Basis
THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:
- MERCHANTABILITY
- FITNESS FOR A PARTICULAR PURPOSE
- NON-INFRINGEMENT
- ACCURACY OR COMPLETENESS

### AI Accuracy
- AI processing is not 100% accurate
- You are responsible for verifying extracted data
- We do not guarantee compliance with any specific regulations
- The Services do not constitute professional accounting or tax advice

### Third-Party Services
We are not responsible for third-party services integrated with our platform, including WhatsApp or payment providers.
      `,
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `
### Exclusion of Damages
TO THE MAXIMUM EXTENT PERMITTED BY LAW, FINTREX SHALL NOT BE LIABLE FOR:
- Indirect, incidental, special, or consequential damages
- Loss of profits, data, or business opportunities
- Damages arising from use or inability to use the Services
- Damages exceeding the fees paid by you in the 12 months preceding the claim

### Essential Purpose
These limitations apply even if remedies fail their essential purpose and regardless of the theory of liability.

### Exceptions
Nothing in these Terms limits liability for:
- Fraud or fraudulent misrepresentation
- Death or personal injury caused by negligence
- Any liability that cannot be excluded by law
      `,
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: `
You agree to indemnify and hold harmless Fintrex, its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including legal fees) arising from:
- Your use of the Services
- Your violation of these Terms
- Your violation of any third-party rights
- Content you upload to the Services
- Your negligence or willful misconduct
      `,
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      content: `
### Governing Law
These Terms are governed by the laws of India, without regard to conflict of law principles.

### Dispute Resolution
Any disputes arising from these Terms or the Services shall be:
1. First attempted to be resolved through good-faith negotiation
2. If unresolved, submitted to binding arbitration under the Arbitration and Conciliation Act, 1996
3. Arbitration shall be conducted in English in Mumbai, India

### Jurisdiction
For any matters not subject to arbitration, courts in Mumbai, India shall have exclusive jurisdiction.

### Class Action Waiver
You agree to resolve disputes individually and waive any right to participate in class actions.
      `,
    },
    {
      id: 'general',
      title: 'General Provisions',
      content: `
### Entire Agreement
These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fintrex.

### Severability
If any provision is found unenforceable, the remaining provisions continue in effect.

### Waiver
Failure to enforce any provision does not waive our right to enforce it later.

### Assignment
You may not assign these Terms without our consent. We may assign our rights freely.

### Force Majeure
We are not liable for delays or failures caused by circumstances beyond our reasonable control.

### Notices
We may provide notices via email or in-app notifications. You may contact us at legal@fintrex.ai.
      `,
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `
We may modify these Terms at any time. Changes will be:
- Posted on this page with updated "Last Updated" date
- Communicated via email for material changes
- Effective upon posting or as specified

Continued use of the Services after changes constitutes acceptance of modified Terms.
      `,
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `
For questions about these Terms:

**Email**: legal@fintrex.ai

**Fintrex AI Private Limited**
[Address to be updated]
India

**Support**: support@fintrex.ai
      `,
    },
  ],
  seo: {
    metaTitle: 'Terms of Service | Fintrex AI',
    metaDescription: 'Read the Terms of Service for Fintrex AI accounting automation platform. Understand your rights and responsibilities when using our Services.',
    keywords: ['terms of service', 'user agreement', 'Fintrex terms', 'legal terms'],
  },
};

// Export helper to get legal document by ID
export const getLegalDocument = (id: 'privacy-policy' | 'terms-of-service'): LegalDocument => {
  return id === 'privacy-policy' ? PRIVACY_POLICY : TERMS_OF_SERVICE;
};
