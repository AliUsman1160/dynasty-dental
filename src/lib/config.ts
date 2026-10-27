/**
 * Central business configuration.
 * Replace every empty value with VERIFIED clinic details. Empty values are
 * rendered as clearly-marked placeholders and never as fake data.
 */
export const siteConfig = {
  name: "Dynasty Dental Solutions",
  shortName: "Dynasty",
  description:
    "Dynasty Dental Solutions offers personalized dental care with clear guidance, a welcoming experience and a focus on your long-term oral health.",
  /** Production URL, e.g. "https://www.example.com". Leave empty until known. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  /** Optional path to a supplied logo asset in /public, e.g. "/logo.svg". */
  logoSrc: "",

  contact: {
    phone: "",
    email: "",
    address: "",
    /** International digits only, e.g. "15551234567". Enables the WhatsApp link. */
    whatsappNumber: "",
  },

  /** e.g. [{ days: "Monday – Friday", hours: "9:00 – 17:00" }] */
  openingHours: [] as { days: string; hours: string }[],

  /** Add only real, verified profile URLs. */
  social: [] as { label: string; href: string }[],
};

export const placeholders = {
  phone: "Phone number to be added",
  email: "Email address to be added",
  address: "Clinic address to be added",
  hours: "Opening hours to be added",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/dentists", label: "Our Dentists" },
  { href: "/patient-information", label: "Patient Information" },
  { href: "/contact", label: "Contact" },
];

export const demoNotice =
  "This is a frontend demonstration. Your appointment request has not been sent. Please contact the clinic directly using its verified contact details.";
