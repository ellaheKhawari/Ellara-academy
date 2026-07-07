import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages, LayoutDashboard } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/cn";

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  const links = [
    { label: t.nav.home, href: "/#hero" },
    { label: t.nav.courses, href: "/#courses" },
    { label: t.nav.teachers, href: "/#teachers" },
    { label: t.nav.reviews, href: "/#reviews" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-cream/80 backdrop-blur-lg dark:border-white/[0.06] dark:bg-ink/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm text-chrome-soft dark:bg-chrome dark:text-ink">
            L
          </span>
            Ellara Academy
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-current/70 transition hover:text-ink dark:text-chrome">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle language"
            onClick={toggleLocale}
            className="flex h-9 items-center gap-1.5 rounded-full border border-black/10 px-3 text-xs font-semibold uppercase tracking-wide transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <Languages size={14} />
            {locale === "en" ? "FA" : "EN"}
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {user ? (
            <Button size="sm" variant="dark" onClick={() => navigate("/dashboard")} className="hidden md:inline-flex">
              <LayoutDashboard size={15} /> {t.nav.dashboard}
            </Button>
          ) : (
            <>
              <Button size="sm" variant="ghost" onClick={() => navigate("/login")} className="hidden md:inline-flex">
                {t.nav.login}
              </Button>
              <Button size="sm" variant="primary" onClick={() => navigate("/register")} className="hidden md:inline-flex">
                {t.nav.getStarted}
              </Button>
            </>
          )}

          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 lg:hidden dark:border-white/10"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/[0.06] lg:hidden dark:border-white/[0.06]"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn("rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10")}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 px-3">
                {user ? (
                  <Button size="sm" variant="dark" className="w-full" onClick={() => navigate("/dashboard")}>
                    {t.nav.dashboard}
                  </Button>
                ) : (
                  <>
                    <Button size="sm" variant="outline" className="w-full" onClick={() => navigate("/login")}>
                      {t.nav.login}
                    </Button>
                    <Button size="sm" variant="primary" className="w-full" onClick={() => navigate("/register")}>
                      {t.nav.getStarted}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
