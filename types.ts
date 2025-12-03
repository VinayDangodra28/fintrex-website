import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stats: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PricingPlan {
  name: string;
  priceMonth: number;
  priceAnnual: number;
  idealFor: string;
  features: string[];
  isPopular?: boolean;
}