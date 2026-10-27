import type { FAQCategory, FAQEntry } from "@/types";

export const faqCategories: FAQCategory[] = [
  "General Information",
  "Dental Services",
  "Appointments",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Patient Preparation",
];

const see = " This is general information only and not a substitute for an in-person assessment.";

export const faqs: FAQEntry[] = [
  { id: "gen-1", category: "General Information", q: "Does the information on this website replace a dental assessment?", a: "No. Website content is educational and general. Only a qualified dental professional who has examined you can advise on your individual needs." },
  { id: "gen-2", category: "General Information", q: "What should I do if I have a dental concern?", a: "Contact the clinic directly to describe your concern. If you have severe pain, facial swelling or an injury, seek urgent dental or medical care." },
  { id: "svc-1", category: "Dental Services", q: "How do I know which dental treatment I need?", a: "A dental professional needs to examine you to recommend suitable options. A consultation is a good starting point for discussing your concerns and goals." },
  { id: "svc-2", category: "Dental Services", q: "Are all treatments suitable for everyone?", a: "No. Suitability depends on your oral health, medical history and goals. Risks, benefits and alternatives should be discussed with your dentist." },
  { id: "svc-3", category: "Dental Services", q: "Can I find out the cost of treatment online?", a: "Costs depend on individual needs, so they are normally discussed after an assessment. Please ask the clinic directly." },
  { id: "apt-1", category: "Appointments", q: "How do I request an appointment?", a: "Use the inquiry form on the Contact page or contact the clinic directly using its verified contact details. The form on this demonstration site does not send requests." },
  { id: "apt-2", category: "Appointments", q: "Can I change or cancel an appointment?", a: "Please contact the clinic as early as possible. Ask about its rescheduling and cancellation arrangements." },
  { id: "prv-1", category: "Preventive Care", q: "How often should I have a dental check-up?", a: "This differs from person to person. Your dentist can recommend an interval based on your oral health." + see },
  { id: "prv-2", category: "Preventive Care", q: "What can I do at home to look after my teeth?", a: "Common recommendations include brushing twice daily with fluoride toothpaste, cleaning between teeth, and limiting sugary snacks and drinks. Ask your dentist for advice tailored to you." },
  { id: "cos-1", category: "Cosmetic Dentistry", q: "Can cosmetic treatment guarantee a particular result?", a: "No. Results vary between individuals. Your dentist can discuss realistic expectations and alternatives." },
  { id: "cos-2", category: "Cosmetic Dentistry", q: "Is teeth whitening safe for everyone?", a: "Not necessarily. A dental assessment helps determine whether it is appropriate and what to expect, including possible sensitivity." },
  { id: "prep-1", category: "Patient Preparation", q: "What should I bring to my first visit?", a: "Consider bringing a list of medications, relevant medical information, details of any previous dental care, and any questions you would like to ask. Ask the clinic if it needs anything else." },
  { id: "prep-2", category: "Patient Preparation", q: "What should I tell the dentist?", a: "Share your concerns, any pain or sensitivity, your medical history, allergies and medications. The more the dentist knows, the better they can help." },
];

export const faqPreviewIds = ["apt-1", "prep-1", "svc-1", "gen-2"];
