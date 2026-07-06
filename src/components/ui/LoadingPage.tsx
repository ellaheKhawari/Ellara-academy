import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";

const GLYPHS = ["A", "文", "한", "Ñ", "ف"];

export function LoadingPage() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-ink text-cream">
      <div className="relative h-28 w-28">
        {GLYPHS.map((g, i) => {
          const angle = (i / GLYPHS.length) * Math.PI * 2;
          const radius = 46;
          return (
            <motion.span
              key={g}
              className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-lg text-chrome-soft backdrop-blur"
              animate={{
                x: [0, Math.cos(angle) * radius, 0],
                y: [0, Math.sin(angle) * radius, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
            >
              {g}
            </motion.span>
          );
        })}
        <motion.div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chrome"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="text-sm tracking-wide text-white/60">{t.loading}</p>
    </div>
  );
}
