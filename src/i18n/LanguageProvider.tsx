import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "./en";
import fa from "./fa";
import type { Dictionary } from "./en";

export type Locale = "en" | "fa";

const dictionaries: Record<Locale, Dictionary> = { en, fa };

interface LanguageContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lingova-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "fa" ? "fa" : "en";
  });

  const dir: "ltr" | "rtl" = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, dir]);

  const setLocale = (l: Locale) => setLocaleState(l);
  const toggleLocale = () => setLocaleState((prev) => (prev === "en" ? "fa" : "en"));

  const value = useMemo(
    () => ({ locale, dir, t: dictionaries[locale], setLocale, toggleLocale }),
    [locale, dir]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
