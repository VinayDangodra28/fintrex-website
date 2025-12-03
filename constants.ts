import { PricingPlan, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "CA Rajesh Kumar",
    role: "Practitioner, Mumbai",
    quote: "Fintrex saved me 35 hours last month. I used to spend entire weekends on GST filing. Now I finish in 2 hours. My clients love the WhatsApp feature.",
    stats: ["Revenue +168%", "35 Hrs Saved"]
  },
  {
    name: "CA Priya Sharma",
    role: "Individual CA, Delhi",
    quote: "The OCR accuracy is incredible. I tested 100 invoices, only 3 needed corrections. The fuzzy vendor matching is a game-changer.",
    stats: ["90% Faster Entry", "NPS 65"]
  },
  {
    name: "Mehta & Associates",
    role: "5-CA Firm, Ahmedabad",
    quote: "We onboarded 120 new clients in 3 months without hiring anyone. Our juniors love that they don't have to manually type invoices anymore.",
    stats: ["Clients +67%", "Saved ₹15L/yr"]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    priceMonth: 1999,
    priceAnnual: 1599,
    idealFor: "Individual CAs, new practitioners",
    features: [
      "Up to 10 clients",
      "200 documents/month",
      "WhatsApp integration (1 number)",
      "Balance Sheet, P&L, GST Reports",
      "Email support"
    ]
  },
  {
    name: "Professional",
    priceMonth: 4999,
    priceAnnual: 3999,
    idealFor: "Established CAs, small firms",
    isPopular: true,
    features: [
      "Up to 50 clients",
      "1,000 documents/month",
      "WhatsApp integration (3 numbers)",
      "Custom KYC workflows",
      "Vendor master with fuzzy matching",
      "Priority email support"
    ]
  },
  {
    name: "Enterprise",
    priceMonth: 9999,
    priceAnnual: 7999,
    idealFor: "Accounting firms, GST consultants",
    features: [
      "Unlimited clients",
      "5,000 documents/month",
      "WhatsApp integration (10 numbers)",
      "Multi-user access (3 accountants)",
      "API access",
      "Dedicated account manager"
    ]
  }
];

export const FAQS_SHORT = [
  { q: "Do my clients need to install an app?", a: "No! They send documents via regular WhatsApp." },
  { q: "How accurate is the OCR?", a: "95%+ accuracy using our proprietary multi-model AI engine." },
  { q: "Is my data secure?", a: "Yes. SOC 2 Type II compliant, India data residency, bank-grade encryption." }
];

export const FAQS_FULL = [
  {
    category: "For Accountants",
    questions: [
      { q: "How long does setup take?", a: "10 minutes. Just sign up, add your clients, and share your WhatsApp number." },
      { q: "Can I export data to Tally/Zoho?", a: "Export to Excel/JSON is available now. Direct integration coming Q2 2025." },
      { q: "What documents can it process?", a: "Invoices, receipts, PAN, Aadhaar, GSTIN, bank statements, utility bills." }
    ]
  },
  {
    category: "For Clients",
    questions: [
      { q: "How do I send documents?", a: "Just send photos/PDFs via WhatsApp to your accountant's number." },
      { q: "Can I see my financial reports?", a: "Yes, you get a view-only client portal for your balance sheets and P&L." }
    ]
  }
];