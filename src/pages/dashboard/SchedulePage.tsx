import { CalendarDays, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { upcomingSessions } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SchedulePage() {
    const { t, locale } = useLanguage();

    return (
        <div>
            <ScrollReveal>
                <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.schedule}</h1>
                <p className="mt-1 text-sm text-current/60">{t.dashboard.scheduleSubtitle}</p>
            </ScrollReveal>

            <div className="mt-7 space-y-3">
                {upcomingSessions.map((s, i) => (
                    <ScrollReveal key={s.id} delay={i * 0.05}>
                        <div className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink dark:bg-chrome/15 dark:text-chrome">
                                <CalendarDays size={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="font-medium">{s.title[locale]}</p>
                                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-current/50">
                                    <Clock size={12} /> {s.time[locale]} ·{" "}
                                    {typeof s.instructor === "string" ? s.instructor : s.instructor[locale]}
                                </p>
                            </div>
                            <button className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                                {t.dashboard.join}
                            </button>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}