import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  items?: string[];
}

export interface TimelineStep {
  title: string;
  phase: string;
  description: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  location: string;
}

export interface Destination {
  city: string;
  tagline: string;
  description: string;
  image: string;
}