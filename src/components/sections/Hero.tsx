import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t.hero.stat1, label: t.hero.stat1Label },
    { value: t.hero.stat2, label: t.hero.stat2Label },
    { value: t.hero.stat3, label: t.hero.stat3Label },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-ink pb-24 pt-16 text-cream md:pt-24">
      {/* ambient glow */}
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
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
            className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
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
              <Button size="lg">
                {t.hero.cta} <ArrowUpRight size={18} />
              </Button>
            </a>
            <a
              href="#sessions"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <PlayCircle size={20} /> {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono-num text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/45">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature visual: liquid chrome mass, slow-morphing, high-gravitas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent" />

          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="chromeCore" cx="38%" cy="32%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#c7c9cf" />
                <stop offset="100%" stopColor="#3a3b40" />
              </radialGradient>
              <radialGradient id="chromeRim" cx="65%" cy="70%" r="60%">
                <stop offset="0%" stopColor="#eceef0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#eceef0" stopOpacity="0" />
              </radialGradient>
              <filter id="blurSoft"><feGaussianBlur stdDeviation="2" /></filter>
            </defs>

            <motion.path
              fill="url(#chromeCore)"
              filter="url(#blurSoft)"
              animate={{
                d: [
                  "M200,60 C280,55 340,120 335,200 C330,280 265,340 195,335 C120,330 60,270 65,195 C70,120 125,65 200,60 Z",
                  "M205,55 C275,65 330,110 330,195 C330,275 270,335 195,330 C115,325 65,265 70,190 C75,115 135,45 205,55 Z",
                  "M200,60 C280,55 340,120 335,200 C330,280 265,340 195,335 C120,330 60,270 65,195 C70,120 125,65 200,60 Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              opacity={0.95}
            />
            <motion.ellipse
              cx="150" cy="140" rx="60" ry="34"
              fill="url(#chromeRim)"
              animate={{ cx: [150, 175, 150], cy: [140, 120, 140], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            className="absolute inset-6 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />

          {/* floating micro-stat card for scale/gravitas, echoes a live product */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-3 left-3 rounded-2xl border border-white/12 bg-ink/70 px-4 py-3 backdrop-blur-md sm:left-6"
          >
            <p className="text-[10px] uppercase tracking-widest text-white/40">Avg. Fluency Gain</p>
            <p className="font-mono-num text-lg font-semibold text-white">+64%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="absolute -top-3 right-3 flex items-center gap-2 rounded-2xl border border-white/12 bg-ink/70 px-4 py-3 backdrop-blur-md sm:right-6"
          >
            <span className="h-2 w-2 rounded-full bg-lime" />
            <p className="text-xs text-white/70">Live session in progress</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
