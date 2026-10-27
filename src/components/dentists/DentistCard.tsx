import { SafeImage } from "@/components/ui/SafeImage";
import type { Dentist } from "@/types";

export function DentistCard({ dentist, compact }: { dentist: Dentist; compact?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative">
        <SafeImage
          src={dentist.image}
          alt={dentist.isPlaceholder ? "Placeholder portrait (stock photo, not a member of the team)" : `Portrait of ${dentist.name}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          wrapperClassName="aspect-[4/4.2]"
          className="object-top transition-transform duration-500 group-hover:scale-105"
        />
        {dentist.isPlaceholder && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy shadow-soft">
            Demo placeholder
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{dentist.name}</h3>
        <p className="mt-1 text-sm font-semibold text-teal-dark">{dentist.title}</p>
        <p className="mt-3 text-sm">{dentist.qualifications.join(" · ")}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Areas of practice">
          {dentist.practiceAreas.map((a) => (
            <li key={a} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">
              {a}
            </li>
          ))}
        </ul>
        {!compact && <p className="mt-4 text-[0.95rem]">{dentist.bio}</p>}
      </div>
    </article>
  );
}
