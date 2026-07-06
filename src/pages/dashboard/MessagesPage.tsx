import { MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function MessagesPage() {
  const { t } = useLanguage();
  return (
    <div>
      <ScrollReveal>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.messages}</h1>
        <p className="mt-1 text-sm text-current/60">Direct messages with your instructors.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="mt-7 flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/15 py-24 text-center dark:border-white/15">
          <MessageSquare size={28} className="text-current/30" />
          <p className="mt-3 text-sm text-current/50">No messages yet — your instructor will reach out after your first session.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
