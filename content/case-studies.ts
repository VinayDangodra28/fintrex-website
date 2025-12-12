export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  clientName: string;
  clientLogo?: string;
  clientType: 'Individual CA' | 'CA Firm' | 'Enterprise';
  location: string;
  industry?: string;
  challenge: string;
  solution: string;
  implementation: string;
  results: CaseStudyResult[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  timeline: string;
  tags: string[];
  publishedAt: string;
  featured?: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description?: string;
  icon?: 'time' | 'money' | 'clients' | 'accuracy' | 'growth';
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'scaling-100-clients',
    slug: 'scaling-to-100-clients-solo-ca',
    title: 'Scaling to 100 Clients as a Solo CA',
    subtitle: 'How CA Rajesh Kumar grew his practice 3x without hiring',
    excerpt: 'Learn how a Mumbai-based CA scaled from 35 to 100+ clients in 8 months using AI automation, while working fewer hours.',
    coverImage: '/case-studies/covers/scaling-100-clients.jpg',
    clientName: 'CA Rajesh Kumar',
    clientType: 'Individual CA',
    location: 'Mumbai, Maharashtra',
    challenge: `
CA Rajesh Kumar faced the classic solo practitioner dilemma: growing demand but limited capacity.

**The situation:**
- 35 active clients, mostly SMBs
- 60+ hours/week, including weekends
- Turning away new clients due to capacity
- Struggling with GST filing deadlines
- No work-life balance

**The breaking point:**
During tax season 2023, Rajesh missed a client's ITR deadline due to overwhelming workload. The client left, and Rajesh knew something had to change.
    `,
    solution: `
Rajesh discovered Fintrex through a colleague and decided to pilot it with his most demanding clients.

**Implementation approach:**
1. Started with 5 high-volume clients for the pilot
2. Set up WhatsApp integration for document collection
3. Trained the AI on his specific vendor categories
4. Gradually migrated all clients over 3 months

**Key features utilized:**
- WhatsApp document collection
- AI-powered invoice extraction
- Automated GST reconciliation
- One-click financial reports
    `,
    implementation: `
**Month 1: Pilot Phase**
- 5 clients migrated
- 200 documents processed
- Initial accuracy: 94%
- Team adaptation time: 1 week

**Month 2: Scaling**
- All 35 clients migrated
- Workflow optimizations
- Custom vendor mappings
- Accuracy improved to 98%

**Month 3-8: Growth Mode**
- Started accepting new clients
- 65 new clients onboarded
- Developed standardized workflows
- Hired 1 junior for client communication
    `,
    results: [
      {
        metric: 'Clients',
        value: '100+',
        description: 'From 35 to 100+ clients',
        icon: 'clients',
      },
      {
        metric: 'Time Saved',
        value: '35 hrs/month',
        description: 'Reduced manual data entry',
        icon: 'time',
      },
      {
        metric: 'Revenue',
        value: '+168%',
        description: 'Year-over-year growth',
        icon: 'money',
      },
      {
        metric: 'Work Hours',
        value: '45 hrs/week',
        description: 'Down from 60+ hours',
        icon: 'time',
      },
    ],
    testimonial: {
      quote: "Fintrex gave me my weekends back. I used to spend entire weekends on GST filing. Now I finish in 2 hours. My clients love the WhatsApp feature—they just send photos and everything is processed automatically.",
      author: 'CA Rajesh Kumar',
      role: 'Practitioner, Mumbai',
      avatar: '/case-studies/avatars/rajesh-kumar.jpg',
    },
    timeline: '8 months',
    tags: ['solo practitioner', 'scaling', 'GST automation', 'WhatsApp'],
    publishedAt: '2024-11-01',
    featured: true,
    seo: {
      metaTitle: 'Scaling to 100 Clients as a Solo CA | Fintrex Case Study',
      metaDescription: 'How CA Rajesh Kumar grew from 35 to 100+ clients in 8 months using AI automation. Read the full success story.',
      keywords: ['CA scaling', 'solo practitioner', 'accounting automation case study', 'GST automation'],
    },
  },
  {
    id: 'gst-filing-automation',
    slug: 'gst-filing-automation-success-story',
    title: 'GST Filing Automation Success Story',
    subtitle: 'How a Delhi CA achieved zero-error GST filing for 50+ clients',
    excerpt: 'CA Priya Sharma eliminated GST filing errors and reduced processing time by 90% with AI-powered automation.',
    coverImage: '/case-studies/covers/gst-automation.jpg',
    clientName: 'CA Priya Sharma',
    clientType: 'Individual CA',
    location: 'Delhi, NCR',
    challenge: `
GST compliance was consuming CA Priya Sharma's practice. With 50+ clients across different sectors, keeping track of varying rates, reconciling with vendors, and meeting deadlines was a nightmare.

**Key challenges:**
- Multiple GST rates across clients
- Vendor reconciliation mismatches
- ITC claim delays due to errors
- Late filing penalties affecting reputation
- Staff turnover due to monotonous work
    `,
    solution: `
After researching multiple solutions, Priya chose Fintrex for its OCR accuracy and automated reconciliation features.

**Solution components:**
- AI-powered invoice extraction with 99% accuracy
- Automated vendor GSTIN validation
- Real-time reconciliation with GSTR-2A/2B
- Deadline tracking and alerts
- One-click GSTR-1 and GSTR-3B preparation
    `,
    implementation: `
**Phase 1: Setup (Week 1-2)**
- Connected existing client database
- Uploaded vendor masters
- Configured GST rules per client sector

**Phase 2: Training (Week 3-4)**
- Processed historical invoices to train AI
- Fine-tuned categorization rules
- Set up reconciliation workflows

**Phase 3: Full Deployment (Month 2)**
- All clients migrated
- Staff trained on exception handling
- Continuous monitoring and optimization
    `,
    results: [
      {
        metric: 'Processing Time',
        value: '90% faster',
        description: 'Invoice to ledger',
        icon: 'time',
      },
      {
        metric: 'Accuracy',
        value: '99.7%',
        description: 'OCR extraction accuracy',
        icon: 'accuracy',
      },
      {
        metric: 'Errors',
        value: 'Zero',
        description: 'GST filing errors in 6 months',
        icon: 'accuracy',
      },
      {
        metric: 'Client NPS',
        value: '65',
        description: 'Up from 35',
        icon: 'growth',
      },
    ],
    testimonial: {
      quote: "The OCR accuracy is incredible. I tested 100 invoices, only 3 needed corrections. The fuzzy vendor matching is a game-changer—it even recognizes vendors with slight name variations.",
      author: 'CA Priya Sharma',
      role: 'Individual CA, Delhi',
      avatar: '/case-studies/avatars/priya-sharma.jpg',
    },
    timeline: '2 months',
    tags: ['GST filing', 'OCR accuracy', 'compliance', 'automation'],
    publishedAt: '2024-10-15',
    featured: true,
    seo: {
      metaTitle: 'GST Filing Automation Success Story | Fintrex Case Study',
      metaDescription: 'How CA Priya Sharma achieved zero-error GST filing for 50+ clients with AI automation. 90% faster processing.',
      keywords: ['GST filing automation', 'OCR accuracy', 'tax compliance automation'],
    },
  },
  {
    id: 'mehta-associates-growth',
    slug: 'ca-firm-growth-without-hiring',
    title: 'CA Firm Growth Without Hiring',
    subtitle: 'How Mehta & Associates onboarded 120 clients in 3 months',
    excerpt: 'A 5-CA firm in Ahmedabad scaled dramatically without expanding headcount, saving ₹15L annually.',
    coverImage: '/case-studies/covers/mehta-associates.jpg',
    clientName: 'Mehta & Associates',
    clientType: 'CA Firm',
    location: 'Ahmedabad, Gujarat',
    industry: 'Multi-sector',
    challenge: `
Mehta & Associates, a well-established 5-CA firm, was facing growth constraints. Their traditional processes couldn't scale without proportionally increasing staff—and good accountants were hard to find.

**Growth blockers:**
- Linear scaling: 1 new client = more staff hours
- Hiring challenges in competitive market
- Training costs eating into margins
- Quality inconsistency with scale
- Partner time consumed by operations
    `,
    solution: `
The firm adopted a "technology-first" growth strategy with Fintrex as the core platform.

**Strategic approach:**
- Standardize all document intake via WhatsApp
- Automate 80% of data entry with AI
- Redeploy junior staff to client advisory
- Partners focus on business development

**Technology stack:**
- Fintrex Enterprise plan
- WhatsApp Business integration
- Multi-user access for all 5 CAs
- API integration with existing systems
    `,
    implementation: `
**Phase 1: Process Redesign (Month 1)**
- Mapped existing workflows
- Identified automation opportunities
- Designed new client onboarding process
- Created SOP documentation

**Phase 2: Technology Deployment (Month 2)**
- Fintrex Enterprise setup
- Staff training (3 days)
- Client communication templates
- Parallel run with old system

**Phase 3: Scale (Month 3-5)**
- Aggressive client acquisition
- 120 new clients onboarded
- Old processes phased out
- Continuous optimization
    `,
    results: [
      {
        metric: 'New Clients',
        value: '120',
        description: 'In just 3 months',
        icon: 'clients',
      },
      {
        metric: 'Cost Savings',
        value: '₹15L/year',
        description: 'Reduced hiring needs',
        icon: 'money',
      },
      {
        metric: 'Partner Time',
        value: '+40%',
        description: 'More time for advisory',
        icon: 'time',
      },
      {
        metric: 'Firm Revenue',
        value: '+67%',
        description: 'Year-over-year',
        icon: 'growth',
      },
    ],
    testimonial: {
      quote: "We onboarded 120 new clients in 3 months without hiring anyone. Our juniors love that they don't have to manually type invoices anymore—they're now doing actual accounting work.",
      author: 'CA Hitesh Mehta',
      role: 'Managing Partner, Mehta & Associates',
      avatar: '/case-studies/avatars/hitesh-mehta.jpg',
    },
    timeline: '5 months',
    tags: ['CA firm', 'scaling', 'enterprise', 'cost savings'],
    publishedAt: '2024-09-20',
    featured: true,
    seo: {
      metaTitle: 'CA Firm Growth Without Hiring | Fintrex Case Study',
      metaDescription: 'How Mehta & Associates onboarded 120 new clients without hiring, saving ₹15L annually. Enterprise automation case study.',
      keywords: ['CA firm scaling', 'enterprise automation', 'accounting firm growth'],
    },
  },
  {
    id: 'zero-touch-tax-season',
    slug: 'zero-touch-tax-season-automation',
    title: 'Zero-Touch Tax Season',
    subtitle: 'How automation made tax season stress-free',
    excerpt: 'A Bangalore CA firm processed 500+ ITRs with minimal manual intervention using AI-powered automation.',
    coverImage: '/case-studies/covers/zero-touch-tax.jpg',
    clientName: 'Sharma & Co.',
    clientType: 'CA Firm',
    location: 'Bangalore, Karnataka',
    challenge: `
Tax season was always chaos at Sharma & Co. Despite being a well-organized firm, the sheer volume of ITRs to process meant long hours, stressed staff, and occasional errors.

**Tax season nightmares:**
- 500+ ITRs in 3-month window
- Document collection delays
- Last-minute client responses
- Staff burnout and overtime
- Error-prone rush processing
    `,
    solution: `
The firm implemented a proactive, technology-driven approach to tax season.

**The strategy:**
- Year-round document collection via WhatsApp
- AI pre-processing of financial documents
- Automated income/deduction categorization
- Self-service client data verification
- Batch processing for similar returns
    `,
    implementation: `
**Pre-Season (Jan-Mar):**
- Client communication campaigns
- Document collection automation
- AI processing of incoming documents

**Tax Season (Apr-Jul):**
- 80% of data already processed
- Focus on complex cases only
- Automated deadline reminders
- Batch filing workflows

**Post-Season:**
- Process analysis and optimization
- Client feedback collection
- System improvements
    `,
    results: [
      {
        metric: 'ITRs Processed',
        value: '500+',
        description: 'In tax season 2024',
        icon: 'clients',
      },
      {
        metric: 'Manual Work',
        value: '-70%',
        description: 'Compared to previous year',
        icon: 'time',
      },
      {
        metric: 'Staff Overtime',
        value: 'Zero',
        description: 'First time in firm history',
        icon: 'time',
      },
      {
        metric: 'Client Satisfaction',
        value: '94%',
        description: 'Post-season survey',
        icon: 'growth',
      },
    ],
    testimonial: {
      quote: "For the first time in 15 years, my team went home at 6 PM during tax season. The AI handled the heavy lifting—we just reviewed and filed.",
      author: 'CA Arun Sharma',
      role: 'Senior Partner, Sharma & Co.',
      avatar: '/case-studies/avatars/arun-sharma.jpg',
    },
    timeline: '1 tax season',
    tags: ['tax season', 'ITR filing', 'automation', 'work-life balance'],
    publishedAt: '2024-08-15',
    seo: {
      metaTitle: 'Zero-Touch Tax Season Automation | Fintrex Case Study',
      metaDescription: 'How Sharma & Co. processed 500+ ITRs with zero overtime using AI automation. Stress-free tax season is possible.',
      keywords: ['ITR filing automation', 'tax season automation', 'CA firm efficiency'],
    },
  },
];

// Helper functions
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return CASE_STUDIES.find(study => study.slug === slug);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return CASE_STUDIES.filter(study => study.featured);
};

export const getCaseStudiesByClientType = (type: CaseStudy['clientType']): CaseStudy[] => {
  return CASE_STUDIES.filter(study => study.clientType === type);
};

export const getRecentCaseStudies = (count: number = 3): CaseStudy[] => {
  return [...CASE_STUDIES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
