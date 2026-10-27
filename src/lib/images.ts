/**
 * Central image registry. Every image is illustrative stock photography
 * (Unsplash License) and does NOT show the real Dynasty Dental Solutions clinic.
 * To use your own photos, drop files into /public/images and replace the
 * values below with local paths such as "/images/reception.jpg".
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const IMAGES = {
  heroConsult: u("1606811841689-23dfddce3e95"),
  intro: u("1588776814546-daab30f310ce"),
  clinicBright: u("1629909613654-28e377c37b09"),
  clinicChairs: u("1445527815219-ecbfec67492e"),
  clinicInterior: u("1629909615184-74f495363b67"),
  reception: u("1519494026892-80bbd2d6fd0d"),
  treatmentRoom: u("1598256989800-fe5f95da9787"),
  dentistWork: u("1588776814546-daab30f310ce"),
  instruments: u("1606265752439-1f18756aa5fc"),
  xrayReview: u("1588776814546-1ffcf47267a5"),
  scanTablet: u("1600170311833-c2cf5280ce49"),
  aligner: u("1609840114035-3c981b782dfe"),
  toothbrushes: u("1607613009820-a29f7bb81c04"),
  portraitA: u("1612349317150-e413f6a5b16d"),
  portraitB: u("1622253692010-333f2da6031d"),
} as const;

export type ImageKey = keyof typeof IMAGES;

export function imageUrl(key: string, width = 1200): string {
  const base = IMAGES[key as ImageKey] ?? IMAGES.clinicBright;
  return base.startsWith("http") ? `${base}?auto=format&fit=crop&q=75&w=${width}` : base;
}
