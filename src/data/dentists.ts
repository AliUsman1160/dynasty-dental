import type { Dentist } from "@/types";

/**
 * DEMO PLACEHOLDERS. Replace with real, verified team details (names,
 * qualifications, registration information) and real portraits supplied by
 * the dentists. Keep `isPlaceholder: true` until the entry is verified.
 */
export const dentists: Dentist[] = [
  {
    id: "dentist-1",
    name: "Dentist Name",
    title: "Principal Dentist (placeholder)",
    qualifications: ["Qualifications to be verified and added"],
    practiceAreas: ["General Dentistry", "Preventive Care"],
    bio: "Add a short, verified biography here describing this dentist's approach to patient care and areas of professional interest.",
    image: "portraitB",
    isPlaceholder: true,
  },
  {
    id: "dentist-2",
    name: "Dentist Name",
    title: "Dentist (placeholder)",
    qualifications: ["Qualifications to be verified and added"],
    practiceAreas: ["Cosmetic Dentistry", "Restorative Dentistry"],
    bio: "Add a short, verified biography here. Only include experience, qualifications and registrations that can be confirmed.",
    image: "portraitA",
    isPlaceholder: true,
  },
];
