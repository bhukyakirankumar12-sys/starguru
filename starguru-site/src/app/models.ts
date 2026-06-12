export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface IndustryItem {
  name: string;
  detail: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  accent: string;
}

export interface ProcessStep {
  label: string;
  detail: string;
}

export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}
