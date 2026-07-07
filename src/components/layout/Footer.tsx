import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-cream dark:border-white/[0.06] dark:bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm text-chrome-soft dark:bg-chrome dark:text-ink">
                L
              </span>
                Ellara Academy
            </div>
            <p className="mt-3 max-w-xs text-sm text-current/60">{t.footer.tagline}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-current/40">{t.footer.company}</p>
            <ul className="space-y-2 text-sm text-current/70">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-current/40">{t.footer.resources}</p>
            <ul className="space-y-2 text-sm text-current/70">
              <li>Courses</li>
              <li>Teachers</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-current/40">{t.footer.legal}</p>
            <ul className="space-y-2 text-sm text-current/70">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] pt-6 text-xs text-current/50 md:flex-row dark:border-white/[0.06]">
          <span>© {year} Ellara Academy. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
