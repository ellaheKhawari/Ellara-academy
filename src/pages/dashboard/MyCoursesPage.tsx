import { useAuthStore } from "@/store/authStore";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { courses } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatNumber } from "@/lib/formatNumber";

export function MyCoursesPage() {
    const { t, locale } = useLanguage();
    const user = useAuthStore((s) => s.user);

    return (
        <div>
            <ScrollReveal>
                <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.myCourses}</h1>
                <p className="mt-1 text-sm text-current/60">{t.dashboard.myCoursesSubtitle}</p>
            </ScrollReveal>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((c, i) => {
                    const active = c.id === user?.language;
                    return (
                        <ScrollReveal key={c.id} delay={i * 0.05}>
                            <div
                                className={`rounded-2xl border p-5 ${
                                    active
                                        ? "border-ink bg-ink/[0.04] dark:border-chrome dark:bg-chrome/[0.06]"
                                        : "border-black/[0.06] bg-white/60 dark:border-white/[0.08] dark:bg-white/[0.03]"
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl">{c.flag}</span>
                                    {active && (
                                        <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-cream dark:bg-chrome dark:text-ink">
                                            {t.dashboard.active}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-3 font-display text-lg font-semibold">{t.coursesPage[c.name]}</h3>
                                <p className="mt-1 text-xs text-current/50">
                                    {formatNumber(c.levels, locale)} {t.dashboard.levelsLabel} ·{" "}
                                    {formatNumber(c.students, locale)} {t.dashboard.studentsLabel}
                                </p>
                                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                                    <div className="h-full rounded-full bg-ink dark:bg-chrome" style={{ width: active ? "62%" : "0%" }} />
                                </div>
                                <p className="mt-1.5 text-[11px] text-current/40">
                                    {active
                                        ? t.dashboard.progressLabel
                                            .replace("{percent}", formatNumber(62, locale))
                                            .replace("{level}", formatNumber(2, locale))
                                        : t.dashboard.notEnrolled}
                                </p>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </div>
    );
}