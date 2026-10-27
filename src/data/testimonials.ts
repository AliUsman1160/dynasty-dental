import type { Testimonial } from "@/types";

/**
 * Add ONLY genuine testimonials that patients have given permission to
 * publish. While this list is empty the homepage shows a patient-care
 * philosophy panel instead. Never add invented reviews or ratings.
 */
export const testimonials: Testimonial[] = [];

export const careCommitments = [
  { title: "We listen first", text: "Your concerns and preferences shape every conversation." },
  { title: "We explain clearly", text: "Options and considerations are described in plain language." },
  { title: "We respect your decisions", text: "You are given the information you need to decide what is right for you." },
];
