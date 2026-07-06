import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Flame, Calendar, TrendingUp, BookOpenCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useAuthStore } from "@/store/authStore";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { weeklyProgress, hoursStudied, upcomingSessions, recentHomework, skillBreakdown } from "@/lib/mockData";

const tooltipStyle = {
  background: "#171a23",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  fontSize: 12,
  color: "#f6f3ec",
};

const columns: GridColDef[] = [
  { field: "title", headerName: "Assignment", flex: 1.4, minWidth: 160 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 130 },
  { field: "score", headerName: "Score", flex: 0.6, minWidth: 90 },
];

export function DashboardHome() {
  const { t } = useLanguage();
  const user = useAuthStore((s) => s.user);

  const stats = [
    { icon: Flame, label: t.dashboard.currentStreak, value: `${user?.streakDays ?? 0} ${t.dashboard.days}` },
    { icon: TrendingUp, label: "Fluency Score", value: "85 / 100" },
    { icon: BookOpenCheck, label: "Sessions Completed", value: "42" },
    { icon: Calendar, label: t.dashboard.nextSession, value: "Today 6PM" },
  ];

  return (
    <div>
      <ScrollReveal>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">
          {t.dashboard.welcome}, {user?.fullName?.split(" ")[0] ?? "Student"} 👋
        </h1>
        <p className="mt-1 text-sm text-current/60">{t.dashboard.welcomeSub}</p>
      </ScrollReveal>

      <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.05}>
            <div className="rounded-2xl border border-black/[0.06] bg-white/60 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <s.icon size={18} className="text-ink dark:text-chrome" />
              <p className="mt-3 font-mono-num text-xl font-semibold">{s.value}</p>
              <p className="mt-0.5 text-xs text-current/50">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ScrollReveal className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="text-sm font-medium">{t.dashboard.weeklyProgress}</p>
            <div className="mt-3 h-60">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyProgress} margin={{ left: -20, right: 10 }}>
                  <defs>
                    <linearGradient id="dashFluency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6E7076" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#6E7076" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#9295A0" }} axisLine={false} tickLine={false} width={28} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="fluency" stroke="#6E7076" strokeWidth={2} fill="url(#dashFluency)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="text-sm font-medium">{t.dashboard.skillBreakdown}</p>
            <div className="mt-3 h-60 space-y-3">
              {skillBreakdown.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-xs">
                    <span className="text-current/60">{s.skill}</span>
                    <span className="font-mono-num text-current/50">{s.value}%</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                    <div className="h-full rounded-full bg-ink dark:bg-chrome" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ScrollReveal>
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="text-sm font-medium">{t.dashboard.upcoming}</p>
            <ul className="mt-4 space-y-3">
              {upcomingSessions.map((u) => (
                <li key={u.id} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  <div>
                    <p className="font-medium">{u.title}</p>
                    <p className="text-xs text-current/50">
                      {u.time} · {u.instructor}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="text-sm font-medium">Hours studied this week</p>
            <div className="mt-3 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hoursStudied} margin={{ left: -20, right: 10 }}>
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#9295A0" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#9295A0" }} axisLine={false} tickLine={false} width={20} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="hours" fill="#7DE0D3" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-1">
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <p className="mb-3 text-sm font-medium">{t.dashboard.recentHomework}</p>
            <div style={{ height: 220, width: "100%" }}>
              <DataGrid
                rows={recentHomework}
                columns={columns}
                hideFooter
                disableRowSelectionOnClick
                sx={{
                  border: "none",
                  fontSize: 12.5,
                  "& .MuiDataGrid-columnHeaders": { borderColor: "rgba(0,0,0,0.06)" },
                  "& .MuiDataGrid-cell": { borderColor: "rgba(0,0,0,0.06)" },
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
