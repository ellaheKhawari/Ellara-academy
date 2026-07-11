import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { courses } from "@/lib/mockData";
import {useIsDarkMode} from "@/hooks/useAuth.ts";

export function AuthLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
    const { locale, t } = useLanguage();
    const isRtl = locale === "fa";
    const isDark = useIsDarkMode();

    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="relative hidden flex-col justify-between overflow-hidden bg-cream dark:bg-ink p-10 text-ink-text dark:text-cream lg:flex">
                <div
                    className={`pointer-events-none absolute -top-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl ${
                        isRtl ? "-left-32" : "-right-32"
                    }`}
                    style={{
                        background: isDark
                            ? "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)"
                            : "radial-gradient(circle, rgba(134,134,134), transparent 70%)",
                    }}
                />
                <Link to="/" className="relative z-10 flex items-center gap-2 font-constant text-xl font-semibold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm bg-ink text-cream dark:bg-chrome dark:text-ink">E</span>
                    Ellara Academy
                </Link>

                <div className={`relative z-10 max-w-sm ${isRtl ? "text-right" : ""}`}>
                    <h2 className="font-display text-3xl font-semibold leading-tight">{t.auth.marketingTitle}</h2>
                    <p className="mt-4 text-sm text-current/60">{t.auth.marketingSubtitle}</p>
                    <div className={`mt-8 flex gap-3 ${isRtl ? "justify-end" : ""}`}>
                        {courses.map((c, i) => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-current/10 bg-current/10 font-display text-base"
                                style={{ color: isDark ? c.color : c.colorLight }}
                            >
                                {c.glyph}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <p className="relative z-10 text-xs md:text-sm text-current/40">© {new Date().getFullYear()} Ellara Academy</p>
            </div>

            <div className="flex items-center justify-center px-6 py-12 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full max-w-sm ${isRtl ? "text-right" : ""}`}
                >
                    <Link to="/" className="mb-8 flex items-center gap-2 font-constant text-xl font-semibold lg:hidden">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm text-cream dark:bg-chrome dark:text-ink">E</span>
                        Ellara Academy
                    </Link>
                    <h1 className="font-display text-2xl font-semibold">{title}</h1>
                    <p className="mt-2 text-sm text-current/60">{subtitle}</p>
                    <div className="mt-8">{children}</div>
                </motion.div>
            </div>
        </div>
    );
}