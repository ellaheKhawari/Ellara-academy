import { useAuthStore } from "@/store/authStore";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatDate } from "@/lib/formatNumber.ts";

export function SettingsPage() {
  const { t, locale } = useLanguage();
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <ScrollReveal>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.settings}</h1>
        <p className="mt-1 text-sm text-current/60">{t.dashboard.p5}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-7 max-w-lg rounded-2xl border border-black/[0.06] bg-white/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div className="flex items-center gap-4">
            <img src={user?.avatarUrl} alt={user?.fullName} className="h-16 w-16 rounded-full object-cover" />
            <div>
              <p className="font-medium">{user?.fullName}</p>
              <p className="text-xs text-current/50">
                  {t.settingsPage.since} {user ? formatDate(user.joinedAt, locale) : ""}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <Label>{t.auth.fullName}</Label>
              <Input defaultValue={user?.fullName} />
            </div>
            <div>
              <Label>{t.auth.email}</Label>
              <Input defaultValue={user?.email} type="email" />
            </div>
            <Button className="w-full" size="lg">
                {t.settingsPage.save}
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
