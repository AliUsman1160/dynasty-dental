import type { Service, ServiceCategory } from "@/types";

/**
 * SAMPLE service list. Replace, remove or add services so this file lists
 * only treatments the clinic genuinely provides. Content is general,
 * educational information — have a qualified dentist review it before launch.
 */

const disclaimer =
  "Suitability, risks and alternatives should be discussed with a qualified dental professional after an in-person assessment.";

export const serviceCategories: ServiceCategory[] = [
  "General Dentistry",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Other Services",
];

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    category: "General Dentistry",
    icon: "stethoscope",
    summary: "Routine examinations and everyday care to help maintain your oral health.",
    image: "dentistWork",
    featured: true,
    intro:
      "General dentistry covers the regular check-ups and everyday care that help you keep your teeth and gums healthy.",
    overview: [
      "A general dental visit usually involves a discussion about your health and concerns, an examination of your teeth, gums and mouth, and a conversation about any care that may be helpful.",
      "Regular visits can help identify changes early and give you a chance to ask questions about your oral health.",
    ],
    reasons: [
      "You have not had a dental check-up for some time",
      "You have noticed discomfort, sensitivity or changes in your mouth",
      "You are new to the area and looking for a regular dental practice",
      "You would like to talk through your oral-health goals",
    ],
    process: [
      { title: "Conversation", text: "You share your concerns, dental history and any relevant health information." },
      { title: "Examination", text: "The dental professional examines your teeth, gums and mouth." },
      { title: "Discussion", text: "Findings and any suitable options are explained so you can ask questions." },
      { title: "Next steps", text: "If care is recommended, the dental professional outlines what may be involved." },
    ],
    benefits: [
      "A chance to raise concerns and ask questions",
      "A clearer picture of your current oral health",
      "A foundation for ongoing preventive care",
    ],
    limitations: [
      "Some concerns may need further assessment or referral",
      "A check-up cannot predict every future dental issue",
    ],
    faqs: [
      { q: "How often should I have a check-up?", a: "The interval varies between people. Your dentist can suggest a schedule based on your individual needs." },
      { q: "Can I book if I have no pain?", a: "Yes. Many people attend for routine check-ups even when they feel comfortable." },
    ],
    related: ["preventive-care", "dental-fillings", "dental-emergencies"],
  },
  {
    slug: "preventive-care",
    name: "Teeth Cleaning & Preventive Care",
    category: "Preventive Care",
    icon: "shield",
    summary: "Professional cleaning and guidance to support healthy teeth and gums.",
    image: "instruments",
    featured: true,
    intro:
      "Preventive care focuses on keeping your mouth healthy through professional cleaning and practical home-care guidance.",
    overview: [
      "A professional clean can remove plaque and tartar that is difficult to manage with brushing alone, and is often paired with advice on daily routines.",
      "Your dental professional can explain what preventive steps may suit your situation.",
    ],
    reasons: [
      "You would like a professional clean as part of regular care",
      "You want advice on brushing, flossing or diet",
      "You have noticed bleeding gums or persistent bad breath and want it checked",
    ],
    process: [
      { title: "Review", text: "Your oral-health history and current concerns are discussed." },
      { title: "Cleaning", text: "Plaque and tartar deposits are carefully removed." },
      { title: "Guidance", text: "You receive suggestions on home care tailored to your needs." },
    ],
    benefits: [
      "Supports gum and tooth health",
      "Helps keep your mouth feeling fresh and clean",
      "Provides personalised home-care advice",
    ],
    limitations: [
      "Cleaning does not treat existing decay or gum disease on its own",
      "Some people may feel mild sensitivity afterwards",
    ],
    faqs: [
      { q: "Does cleaning replace brushing at home?", a: "No. Professional cleaning complements, but does not replace, a daily home-care routine." },
      { q: "Can anyone have a professional clean?", a: "Most people can, but your dentist will confirm what is appropriate after assessing your mouth." },
    ],
    related: ["general-dentistry", "teeth-whitening", "cosmetic-dentistry"],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    category: "Cosmetic Dentistry",
    icon: "sparkles",
    summary: "Explore options that may enhance the appearance of your smile.",
    image: "clinicBright",
    featured: true,
    intro:
      "Cosmetic dentistry is about discussing what you would like to change about the look of your smile and which options may be suitable.",
    overview: [
      "Options can include approaches that change the colour, shape or alignment of teeth. Which are appropriate depends on your oral health, goals and preferences.",
      "A consultation helps you understand the possibilities, limitations and alternatives before making any decision.",
    ],
    reasons: [
      "You feel self-conscious about the look of your smile",
      "You have chipped, discoloured or uneven teeth",
      "You would like to understand what cosmetic options exist",
    ],
    process: [
      { title: "Discuss goals", text: "You describe what you would like to improve." },
      { title: "Assessment", text: "Your oral health is examined to see what may be suitable." },
      { title: "Explore options", text: "Possible approaches, considerations and alternatives are explained." },
      { title: "Plan", text: "If you wish to proceed, a plan is discussed with you." },
    ],
    benefits: [
      "An opportunity to discuss your goals openly",
      "A clear explanation of available options",
    ],
    limitations: [
      "Results vary between individuals and cannot be guaranteed",
      "Some options may not be suitable for everyone",
      "Treatment may involve ongoing maintenance",
    ],
    faqs: [
      { q: "Is cosmetic treatment only about appearance?", a: "Appearance is the focus, but your dentist will also consider the health of your teeth and gums." },
      { q: "Will I see the result in advance?", a: "Some practices can illustrate possibilities, but outcomes cannot be guaranteed. Ask your dentist what is available." },
    ],
    related: ["teeth-whitening", "crowns-and-bridges", "orthodontic-consultations"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    icon: "sun",
    summary: "Discuss options for lightening tooth colour under professional guidance.",
    image: "toothbrushes",
    featured: true,
    intro:
      "Teeth whitening aims to lighten the colour of teeth. A dental assessment helps determine whether it is appropriate for you.",
    overview: [
      "Tooth colour can change for many reasons, and not every type of discolouration responds to whitening in the same way.",
      "Your dental professional can discuss suitable approaches and what to expect, including possible sensitivity.",
    ],
    reasons: [
      "You would like a brighter-looking smile",
      "You are unsure which whitening products are safe to use",
      "You want to know whether your teeth are suitable for whitening",
    ],
    process: [
      { title: "Assessment", text: "Your teeth and gums are checked to confirm whitening is appropriate." },
      { title: "Options", text: "Possible approaches and considerations are explained." },
      { title: "Aftercare", text: "You receive guidance on caring for your teeth afterwards." },
    ],
    benefits: ["Professional guidance on a suitable approach", "An opportunity to discuss realistic expectations"],
    limitations: [
      "Results vary and are not permanent",
      "Existing fillings, crowns and veneers do not change colour",
      "Temporary sensitivity can occur for some people",
    ],
    faqs: [
      { q: "Is whitening suitable for everyone?", a: "No. Your dentist will assess whether it is appropriate for you." },
      { q: "How long will results last?", a: "This varies between individuals and depends on habits such as diet. Your dentist can explain what to expect." },
    ],
    related: ["cosmetic-dentistry", "preventive-care", "crowns-and-bridges"],
  },
  {
    slug: "orthodontic-consultations",
    name: "Orthodontic Consultations",
    category: "Other Services",
    icon: "align",
    summary: "Talk through options for straightening teeth or improving how they bite together.",
    image: "aligner",
    featured: true,
    intro:
      "An orthodontic consultation is a conversation about tooth alignment, bite and the options that may help.",
    overview: [
      "Options for aligning teeth vary and may include different types of braces or aligners. Suitability depends on your individual situation.",
      "A consultation lets you ask questions about what may be involved and whether referral to a specialist could be helpful.",
    ],
    reasons: [
      "You are concerned about crowded or spaced teeth",
      "You are thinking about braces or clear aligners",
      "You would like advice for a child's developing teeth",
    ],
    process: [
      { title: "Discuss concerns", text: "You explain what you would like to change." },
      { title: "Examination", text: "Your teeth and bite are assessed." },
      { title: "Options", text: "Possible approaches and the next steps are explained, including referral if appropriate." },
    ],
    benefits: ["Clarity about the options available", "An informed starting point for any decision"],
    limitations: [
      "Treatment may take a considerable period and requires commitment",
      "Not every option suits every person",
    ],
    faqs: [
      { q: "Is there an age limit?", a: "Orthodontic assessment can be discussed at different ages. Your dentist can advise what is appropriate." },
      { q: "Does a consultation commit me to treatment?", a: "No. A consultation is a chance to gather information." },
    ],
    related: ["cosmetic-dentistry", "general-dentistry", "teeth-whitening"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative Dentistry",
    icon: "implant",
    summary: "Learn about options for replacing missing teeth.",
    image: "scanTablet",
    featured: true,
    intro:
      "Dental implants are one option for replacing missing teeth. An assessment is needed to see whether they are suitable.",
    overview: [
      "An implant is a small post placed in the jaw to support a replacement tooth. The process typically involves several stages over a period of time.",
      "Whether an implant is appropriate depends on factors such as oral health and the condition of the jawbone. Other options for replacing teeth also exist.",
    ],
    reasons: [
      "You have one or more missing teeth",
      "You are finding dentures uncomfortable and want to explore alternatives",
      "You would like to compare tooth-replacement options",
    ],
    process: [
      { title: "Assessment", text: "Your oral health is evaluated, which may include imaging." },
      { title: "Planning", text: "Options, stages, risks and alternatives are discussed." },
      { title: "Treatment stages", text: "If you proceed, care is carried out in planned stages." },
      { title: "Review", text: "Follow-up and long-term care are explained." },
    ],
    benefits: ["A fixed option for replacing a missing tooth for some patients", "Can be discussed alongside other alternatives"],
    limitations: [
      "Not suitable for everyone",
      "Involves a surgical procedure and healing time",
      "As with any treatment, risks and complications are possible",
    ],
    faqs: [
      { q: "Am I suitable for an implant?", a: "Only an in-person assessment by a dental professional can answer this." },
      { q: "Are there alternatives?", a: "Yes. Bridges and dentures are among other options your dentist can explain." },
    ],
    related: ["crowns-and-bridges", "general-dentistry", "dental-fillings"],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    category: "Restorative Dentistry",
    icon: "crown",
    summary: "Restorations that can protect damaged teeth or replace missing ones.",
    image: "clinicChairs",
    featured: true,
    intro:
      "Crowns and bridges are restorations used to cover a damaged tooth or fill the gap left by a missing one.",
    overview: [
      "A crown fits over a tooth to restore its shape and strength. A bridge uses neighbouring teeth to support a replacement tooth.",
      "Your dentist can explain which, if either, may be appropriate and what the alternatives are.",
    ],
    reasons: [
      "A tooth is broken, worn or heavily filled",
      "You have a gap from a missing tooth",
      "You would like to compare restoration options",
    ],
    process: [
      { title: "Assessment", text: "The tooth and surrounding area are examined." },
      { title: "Preparation", text: "If you go ahead, the tooth is prepared and impressions or scans are taken." },
      { title: "Fitting", text: "The restoration is fitted and checked for comfort and bite." },
    ],
    benefits: ["Can help restore function and appearance", "Several material options may be discussed"],
    limitations: [
      "Preparing a tooth involves removing some tooth structure",
      "Restorations may eventually need repair or replacement",
    ],
    faqs: [
      { q: "How long does a crown last?", a: "This varies depending on the individual and their oral care. Your dentist can explain what to expect." },
      { q: "Is it uncomfortable?", a: "Comfort measures can be discussed before treatment. Ask your dentist about your concerns." },
    ],
    related: ["dental-implants", "root-canal-treatment", "dental-fillings"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "Restorative Dentistry",
    icon: "heart-pulse",
    summary: "Information about treatment that aims to save a badly infected or damaged tooth.",
    image: "treatmentRoom",
    featured: true,
    intro:
      "Root canal treatment is a procedure that aims to treat infection or damage inside a tooth so it may be kept.",
    overview: [
      "When the soft tissue inside a tooth becomes inflamed or infected, a dentist may discuss root canal treatment as an alternative to removing the tooth.",
      "Whether it is suitable depends on the condition of the tooth, which only an in-person assessment can establish.",
    ],
    reasons: [
      "You have persistent tooth pain or sensitivity",
      "You have been told a tooth may be infected",
      "You want to understand options for saving a tooth",
    ],
    process: [
      { title: "Assessment", text: "The tooth is examined, often with imaging." },
      { title: "Discussion", text: "Treatment, risks and alternatives are explained." },
      { title: "Treatment", text: "The inside of the tooth is cleaned and sealed, usually over one or more visits." },
      { title: "Restoration", text: "The tooth is typically restored, sometimes with a crown." },
    ],
    benefits: ["May allow a natural tooth to be kept", "Can address the source of infection or pain"],
    limitations: [
      "Not every tooth can be saved",
      "May require more than one visit",
      "The treated tooth usually needs a lasting restoration",
    ],
    faqs: [
      { q: "Will it hurt?", a: "Comfort and pain management can be discussed with your dentist before treatment." },
      { q: "What if I do not have treatment?", a: "Untreated infection may worsen. Please seek a dental assessment promptly if you have ongoing pain." },
    ],
    related: ["crowns-and-bridges", "dental-emergencies", "dental-fillings"],
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    category: "Restorative Dentistry",
    icon: "wrench",
    summary: "Repair of teeth affected by decay or minor damage.",
    image: "clinicInterior",
    intro: "Fillings are used to repair teeth that have been affected by decay or small fractures.",
    overview: [
      "The affected area is cleaned and then filled with a suitable material to restore the tooth's shape and function.",
      "Material choices and their pros and cons can be discussed with your dentist.",
    ],
    reasons: [
      "You have been told you have a cavity",
      "A filling has come loose or broken",
      "A tooth feels rough, sensitive or chipped",
    ],
    process: [
      { title: "Examination", text: "The tooth is assessed." },
      { title: "Preparation", text: "Decayed or damaged material is removed." },
      { title: "Restoration", text: "The tooth is filled and its bite checked." },
    ],
    benefits: ["Helps restore a damaged tooth", "Can prevent a problem from progressing"],
    limitations: ["Fillings may need replacement over time", "Larger damage may need a different approach"],
    faqs: [
      { q: "Which material is best?", a: "It depends on the tooth and your circumstances. Your dentist can explain the options." },
      { q: "Can I eat afterwards?", a: "Your dentist will give specific advice after your appointment." },
    ],
    related: ["general-dentistry", "crowns-and-bridges", "root-canal-treatment"],
  },
  {
    slug: "dental-emergencies",
    name: "Dental Concerns & Urgent Care",
    category: "Other Services",
    icon: "siren",
    summary: "Guidance on what to do about sudden pain, injury or swelling.",
    image: "reception",
    intro:
      "If you have a sudden dental problem, contacting a dental professional promptly is important.",
    overview: [
      "Urgent concerns can include severe pain, a knocked-out or broken tooth, or swelling. This page offers general information only.",
      "Please call the clinic directly for urgent advice. If you have facial swelling affecting breathing or swallowing, seek emergency medical care immediately.",
    ],
    reasons: [
      "You have severe or worsening toothache",
      "You have injured a tooth",
      "You have swelling in your mouth or face",
    ],
    process: [
      { title: "Contact the clinic", text: "Call to describe your situation and ask about availability." },
      { title: "Assessment", text: "The dental professional examines the problem." },
      { title: "Advice", text: "Suitable options and next steps are discussed." },
    ],
    benefits: ["Prompt professional assessment of a concerning problem"],
    limitations: ["Emergency availability should be confirmed directly with the clinic", "Initial care may be temporary"],
    faqs: [
      { q: "Can I use the contact form for an emergency?", a: "No. For urgent problems please contact the clinic directly by phone or seek emergency care." },
    ],
    related: ["general-dentistry", "root-canal-treatment", "dental-fillings"],
  },
];

export const serviceDisclaimer = disclaimer;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const featuredServices = services.filter((s) => s.featured);
