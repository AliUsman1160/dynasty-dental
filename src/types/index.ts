export type ServiceCategory =
  | "General Dentistry"
  | "Preventive Care"
  | "Cosmetic Dentistry"
  | "Restorative Dentistry"
  | "Other Services";

export type ServiceIconName =
  | "stethoscope"
  | "sparkles"
  | "smile"
  | "sun"
  | "align"
  | "implant"
  | "crown"
  | "heart-pulse"
  | "shield"
  | "wrench"
  | "siren";

export interface FAQItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: ServiceIconName;
  /** Short description used on cards. */
  summary: string;
  /** Key into IMAGES (src/lib/images.ts). */
  image: string;
  featured?: boolean;
  intro: string;
  overview: string[];
  reasons: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  limitations: string[];
  faqs: FAQItem[];
  related: string[];
}

export interface Dentist {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  practiceAreas: string[];
  bio: string;
  image: string;
  /** True while the profile is demo content that must be replaced. */
  isPlaceholder: boolean;
}

export type GalleryCategory = "Clinic" | "Team" | "Equipment" | "Patient Experience";

export interface GalleryImage {
  id: string;
  image: string;
  category: GalleryCategory;
  alt: string;
  caption: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". */
  ratio: string;
}

export interface Testimonial {
  name: string;
  text: string;
  treatment?: string;
}

export type FAQCategory =
  | "General Information"
  | "Dental Services"
  | "Appointments"
  | "Preventive Care"
  | "Cosmetic Dentistry"
  | "Patient Preparation";

export interface FAQEntry extends FAQItem {
  id: string;
  category: FAQCategory;
}
