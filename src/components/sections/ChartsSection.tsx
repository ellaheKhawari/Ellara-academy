import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { weeklyProgress, hoursStudied, skillBreakdown } from "@/lib/mockData";

const tooltipStyle = {
  background: "#171a23",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  fontSize: 12,
  color: "#f6f3ec",
};

export function ChartsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.charts.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.charts.title}</h2>
          <p className="mt-4 text-current/60">{t.charts.subtitle}</p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-sm font-medium">{t.charts.fluency}</p>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyProgress} margin={{ left: -20, right: 10 }}>
                    <defs>
                      <linearGradient id="fluencyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6E7076" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#6E7076" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} width={30} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="fluency" stroke="#6E7076" strokeWidth={2} fill="url(#fluencyGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-sm font-medium">{t.charts.hours}</p>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hoursStudied} margin={{ left: -20, right: 10 }}>
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} width={24} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="hours" fill="#7DE0D3" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-sm font-medium">Skill Breakdown</p>
              <div className="mt-2 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillBreakdown} outerRadius="70%">
                    <PolarGrid stroke="#9295A0" strokeOpacity={0.3} />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "#9295A0" }} />
                    <Radar dataKey="value" stroke="#B47DE0" fill="#B47DE0" fillOpacity={0.4} />
                    <Tooltip contentStyle={tooltipStyle} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-sm font-medium">{t.charts.retention}</p>
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyProgress} margin={{ left: -20, right: 10 }}>
                    <defs>
                      <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5B8DEF" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#5B8DEF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} width={30} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="retention" stroke="#5B8DEF" strokeWidth={2} fill="url(#retentionGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
