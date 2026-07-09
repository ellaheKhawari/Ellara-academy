import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider.tsx";
import { ScrollReveal } from "@/components/ui/ScrollReveal.tsx";
import { reviews } from "@/lib/mockData.ts";

export function ReviewsSection() {
    const { t, dir, locale } = useLanguage();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, direction: dir });
    const [selected, setSelected] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => setSelected(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.reInit({ direction: dir });
    }, [emblaApi, dir]);

    return (
        <section id="reviews" className="bg-cream py-24 dark:bg-ink">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <ScrollReveal className="max-w-xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink dark:text-chrome">{t.reviews.eyebrow}</p>
                        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.reviews.title}</h2>
                        <p className="mt-4 text-current/60">{t.reviews.subtitle}</p>
                    </ScrollReveal>
                    <div className="flex gap-2">
                        <button
                            onClick={scrollPrev}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                        >
                            {dir === "rtl" ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                        </button>
                        <button
                            onClick={scrollNext}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                        >
                            {dir === "rtl" ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                        </button>
                    </div>
                </div>

                <div className="mt-12 overflow-hidden" ref={emblaRef}>
                    <div className="flex -ms-5">
                        {reviews.map((r) => (
                            <div key={r.id} className="min-w-0 flex-[0_0_100%] ps-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
                                <div className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-secondary p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
                                    <Quote className="text-ink dark:text-chrome" size={26} />
                                    <p className="mt-4 flex-1 text-sm leading-relaxed text-current/75">"{r.quote[locale]}"</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                                        <div>
                                            <p className="text-sm font-semibold">{r.name}</p>
                                            <p className="text-xs text-current/50">
                                                {t.reviews.trackLabel.replace("{lang}", t.languages[r.courseId])}
                                            </p>
                                        </div>
                                        <div className="ms-auto flex gap-0.5">
                                            {Array.from({ length: r.rating }).map((_, i) => (
                                                <Star key={i} size={13} className="fill-ink dark:fill-chrome text-ink dark:text-chrome" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-1.5">
                    {reviews.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all ${
                                selected === i ? "w-6 bg-ink dark:bg-chrome" : "w-1.5 bg-black/15 dark:bg-white/15"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}