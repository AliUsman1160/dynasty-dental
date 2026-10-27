import type { GalleryCategory, GalleryImage } from "@/types";

export const galleryCategories: GalleryCategory[] = ["Clinic", "Team", "Equipment", "Patient Experience"];

/**
 * Illustrative stock photography — NOT photographs of the actual clinic.
 * Replace with real clinic photos (with permission from anyone shown).
 */
export const galleryImages: GalleryImage[] = [
  { id: "g1", image: "reception", category: "Clinic", alt: "Bright dental clinic reception area with a curved front desk", caption: "A welcoming reception area (illustrative image)", ratio: "4 / 3" },
  { id: "g2", image: "clinicBright", category: "Clinic", alt: "Modern dental treatment room with natural light", caption: "A bright treatment room (illustrative image)", ratio: "4 / 5" },
  { id: "g3", image: "instruments", category: "Equipment", alt: "Dental professional holding a mirror and probe", caption: "Instruments used during an examination (illustrative image)", ratio: "1 / 1" },
  { id: "g4", image: "heroConsult", category: "Patient Experience", alt: "Dentist explaining a scan to a patient in the treatment chair", caption: "Talking through options with a patient (illustrative image)", ratio: "4 / 3" },
  { id: "g5", image: "clinicChairs", category: "Clinic", alt: "Clean dental operatories with two treatment chairs", caption: "Treatment chairs in a clean, bright room (illustrative image)", ratio: "4 / 5" },
  { id: "g6", image: "scanTablet", category: "Equipment", alt: "Gloved hand pointing at a dental scan on a tablet", caption: "Digital imaging helps explain findings (illustrative image)", ratio: "4 / 3" },
  { id: "g7", image: "dentistWork", category: "Team", alt: "Dental team members working together during a procedure", caption: "A team working together (illustrative image)", ratio: "4 / 5" },
  { id: "g9", image: "treatmentRoom", category: "Clinic", alt: "Treatment room with an orange chair and overhead light", caption: "A comfortable treatment room (illustrative image)", ratio: "4 / 3" },
  { id: "g10", image: "xrayReview", category: "Equipment", alt: "Dentist reviewing dental scans on a light box", caption: "Reviewing dental scans (illustrative image)", ratio: "4 / 5" },
  { id: "g11", image: "clinicInterior", category: "Clinic", alt: "Spacious dental clinic interior with large windows", caption: "A spacious clinic interior (illustrative image)", ratio: "4 / 3" },
  { id: "g12", image: "toothbrushes", category: "Patient Experience", alt: "Toothbrushes in a glass jar beside green leaves", caption: "Everyday oral-care guidance (illustrative image)", ratio: "1 / 1" },
];

/** Preview shown on the homepage. */
export const galleryPreviewIds = ["g1", "g2", "g3", "g4", "g5"];
