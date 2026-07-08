import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider.tsx";
import { ScrollReveal } from "@/components/ui/ScrollReveal.tsx";

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="faq" className="bg-cream py-24 dark:bg-ink">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.faq.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.faq.title}</h2>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.q} delay={0.05 * i}>
              <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-secondary dark:border-white/[0.08] dark:bg-white/[0.03]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className="text-sm font-medium sm:text-base">{item.q}</span>
                  <motion.span animate={{ rotate: openIndex === i ? 180 : 0 }} className="shrink-0 text-current/50">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-current/60">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
