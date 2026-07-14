import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider.tsx";
import { Button } from "@/components/ui/Button.tsx";
import {GlassGlobe} from "@/pages/hero/GlassGlobe.tsx";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t.hero.stat1, label: t.hero.stat1Label },
    { value: t.hero.stat2, label: t.hero.stat2Label },
    { value: t.hero.stat3, label: t.hero.stat3Label },
  ];

  return (
      <section id="hero" className="relative overflow-hidden bg-cream pb-10 pt-10 text-ink-text dark:bg-ink dark:text-cream md:pt-24 md:pb-24">
        <div
        className="pointer-events-none absolute -right-20 -top-32 h-[620px] w-[620px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-current/15 bg-current/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-current/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ink/[0.6] dark:bg-cream/[0.8]" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-current/55 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#courses">
              <Button size="lg" >
                {t.hero.cta} <ArrowUpRight size={18} />
              </Button>
            </a>
            <a
              href="#sessions"
              className="inline-flex items-center gap-2 text-sm font-medium text-current/75 transition hover:text-current"
            >
              <PlayCircle size={20} /> {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-current/10 pt-8 sm:max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono-num text-2xl font-semibold text-current sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-current/45">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <GlassGlobe/>
      </div>
    </section>
  );
}
