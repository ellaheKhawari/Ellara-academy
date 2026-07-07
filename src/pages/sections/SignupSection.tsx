import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageProvider.tsx";
import { ScrollReveal } from "@/components/ui/ScrollReveal.tsx";
import { Input, Label } from "@/components/ui/Input.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { courses } from "@/lib/mockData.ts";

export function SignupSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState(courses[0].id);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Let's finish creating your account.");
    navigate("/register", { state: { fullName: name, email, language } });
  }

  return (
    <section id="signup" className="relative overflow-hidden bg-ink py-24 text-cream">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-chrome-soft">{t.signup.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.signup.title}</h2>
          <p className="mt-4 max-w-md text-white/60">{t.signup.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="space-y-4">
              <div>
                <Label className="text-white/60">{t.signup.namePlaceholder}</Label>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.signup.namePlaceholder}
                  className="border-white/10 bg-white/5 text-cream placeholder:text-white/30"
                />
              </div>
              <div>
                <Label className="text-white/60">{t.signup.emailPlaceholder}</Label>
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.signup.emailPlaceholder}
                  className="border-white/10 bg-white/5 text-cream placeholder:text-white/30"
                />
              </div>
              <div>
                <Label className="text-white/60">{t.signup.languageLabel}</Label>
                <div className="grid grid-cols-5 gap-2">
                  {courses.map((c) => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setLanguage(c.id)}
                      className={`flex h-11 items-center justify-center rounded-xl border text-lg transition ${
                        language === c.id ? "border-chrome bg-chrome/15" : "border-white/10 bg-white/5"
                      }`}
                    >
                      {c.flag}
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                {t.signup.cta}
              </Button>
              <p className="text-center text-xs text-white/40">{t.signup.note}</p>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
