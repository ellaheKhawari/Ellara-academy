import { BarChart3, Clapperboard, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function PanelSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { icon: BarChart3, title: t.panel.feature1, desc: t.panel.feature1Desc },
    { icon: Clapperboard, title: t.panel.feature2, desc: t.panel.feature2Desc },
    { icon: ListChecks, title: t.panel.feature3, desc: t.panel.feature3Desc },
  ];

  return (
    <section className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-chrome-soft">{t.panel.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.panel.title}</h2>
          <p className="mt-4 text-white/60">{t.panel.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-3 shadow-2xl">
            <div className="rounded-2xl border border-white/10 bg-[#0d0f15] p-4 sm:p-6">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-2">
                  <p className="text-xs text-white/40">{t.dashboard.weeklyProgress}</p>
                  <div className="mt-3 flex h-28 items-end gap-2">
                    {[30, 45, 38, 60, 52, 70, 64, 80, 74, 88, 82, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-chrome/40 to-chrome-soft"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/40">{t.dashboard.currentStreak}</p>
                  <p className="mt-2 font-mono-num text-3xl font-semibold text-chrome-soft">14</p>
                  <p className="text-xs text-white/40">{t.dashboard.days}</p>
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <span key={i} className={`h-2 flex-1 rounded-full ${i < 5 ? "bg-teal" : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={0.1 * i}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <f.icon size={22} className="text-chrome-soft" />
                <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="primary" size="lg" onClick={() => navigate("/dashboard")}>
            {t.panel.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
