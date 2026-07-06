import { Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";
import { sampleSessions } from "@/lib/mockData";

export function SessionsSection() {
  const { t } = useLanguage();

  return (
    <section id="sessions" className="bg-cream py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.sessions.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.sessions.title}</h2>
          <p className="mt-4 text-current/60">{t.sessions.subtitle}</p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sampleSessions.map((s) => (
            <StaggerItem key={s.id}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                  {s.course}
                </span>
                <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:scale-110 group-hover:bg-chrome group-hover:text-ink">
                  <Play size={18} fill="currentColor" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-medium text-white">{s.title}</p>
                  <p className="mt-1 text-xs text-white/60">{s.duration}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
