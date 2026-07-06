import { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  BookOpen,
  CalendarDays,
  ListChecks,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useAuthStore } from "@/store/authStore";
import { useLogout } from "@/hooks/useAuth";
import { cn } from "@/lib/cn";

export function DashboardLayout() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, setTheme } = useTheme();
  const user = useAuthStore((s) => s.user);
  const logout = useLogout();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", label: t.dashboard.overview, icon: LayoutGrid, end: true },
    { to: "/dashboard/courses", label: t.dashboard.myCourses, icon: BookOpen },
    { to: "/dashboard/schedule", label: t.dashboard.schedule, icon: CalendarDays },
    { to: "/dashboard/homework", label: t.dashboard.homework, icon: ListChecks },
    { to: "/dashboard/messages", label: t.dashboard.messages, icon: MessageSquare },
    { to: "/dashboard/settings", label: t.dashboard.settings, icon: Settings },
  ];

  async function handleLogout() {
    await logout.mutateAsync();
    toast.success("Logged out.");
    navigate("/");
  }

  const sidebarContent = (
    <>
      <div className="flex items-center gap-2 px-1 font-display text-lg font-semibold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-chrome text-sm text-ink">L</span>
        Lingova
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-ink/10 dark:bg-chrome/15 text-ink dark:text-chrome"
                  : "text-current/60 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              )
            }
          >
            <item.icon size={17} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto space-y-3 border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-black/10 text-xs font-semibold uppercase dark:border-white/10"
          >
            <Languages size={13} /> {locale === "en" ? "FA" : "EN"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/10"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-black/[0.03] p-2.5 dark:bg-white/[0.04]">
          <img src={user?.avatarUrl} alt={user?.fullName} className="h-9 w-9 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold">{user?.fullName}</p>
            <p className="truncate text-[11px] text-current/50">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-current/60 transition hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
        >
          <LogOut size={17} /> {t.dashboard.logout}
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-cream dark:bg-ink">
      <aside className="sticky top-0 hidden h-screen w-64 flex-col border-e border-black/[0.06] p-5 lg:flex dark:border-white/[0.08]">
        {sidebarContent}
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-black/[0.06] px-5 lg:hidden dark:border-white/[0.08]">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-chrome text-sm text-ink">L</span>
            Lingova
          </div>
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </header>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 start-0 z-50 flex w-72 flex-col bg-cream p-5 shadow-2xl lg:hidden dark:bg-ink"
            >
              <button onClick={() => setMobileOpen(false)} className="mb-4 self-end" aria-label="Close menu">
                <X size={20} />
              </button>
              {sidebarContent}
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
