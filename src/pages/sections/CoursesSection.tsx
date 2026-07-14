import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider.tsx";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal.tsx";
import { courses } from "@/lib/mockData.ts";

export function CoursesSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="courses" className="bg-cream py-14 lg:py-18 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.courses.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.courses.title}</h2>
          <p className="mt-4 text-current/60">{t.courses.subtitle}</p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <StaggerItem key={c.id}>
              <div className="group relative h-full overflow-hidden rounded-3xl p-1 transition  border border-current/10 hover:shadow-xl bg-coolGray dark:bg-white/[0.03] ">
                <div className="relative h-44 overflow-hidden rounded-[20px]">
                  <img
                    src={c.image}
                    alt={t.languages[c.id]}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                  <span className="absolute left-4 top-4 text-2xl">{c.flag}</span>
                  <span
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-semibold text-ink "
                  >
                    {c.glyph}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{t.languages[c.id]}</h3>
                  <p className="mt-1 text-xs text-current/50">
                    {c.levels} {t.courses.levels} · {c.students.toLocaleString()} {t.courses.students}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink dark:text-chrome transition group-hover:gap-2">
                    {t.courses.viewCourse} <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
