export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
  icon: string;
}

export interface Step {
  n: string;
  title: string;
  body: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Testimonial {
  body: string;
  who: string;
}

export interface Notary {
  id: string;
  name: string;
  regionId: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  nextAvailable: string;
  avatarSeed: string;
}

export interface BookingFormValues {
  fullName: string;
  email: string;
  documentType: string;
  regionId: string;
  preferredDate: string;
  notes?: string;
}
