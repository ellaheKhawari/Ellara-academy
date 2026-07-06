import { useLanguage } from "@/i18n/LanguageProvider";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";
import { teachers } from "@/lib/mockData";

export function TeachersSection() {
  const { t } = useLanguage();

  return (
    <section id="teachers" className="bg-cream py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.teachers.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.teachers.title}</h2>
          <p className="mt-4 text-current/60">{t.teachers.subtitle}</p>
        </ScrollReveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {teachers.map((tc) => (
            <StaggerItem key={tc.id}>
              <div className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white/60 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={tc.image}
                    alt={tc.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold">{tc.name}</h3>
                  <p className="text-xs font-medium text-ink dark:text-chrome">{tc.course}</p>
                  <p className="mt-2 text-xs leading-relaxed text-current/55">{tc.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
