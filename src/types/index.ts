export interface NavLink {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  company: string;
  role: string;
  age: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
