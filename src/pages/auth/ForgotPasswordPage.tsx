import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useForgotPassword } from "@/hooks/useAuth";

export function ForgotPasswordPage() {
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const forgot = useForgotPassword();

    return (
        <AuthLayout title={t.auth.forgotTitle} subtitle={t.auth.forgotSubtitle}>
            {forgot.isSuccess ? (
                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
                    <CheckCircle2 className="mx-auto text-teal" size={32} />
                    <p className="mt-3 text-sm text-current/70">{forgot.data.message}</p>
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        forgot.mutate(email);
                    }}
                    className="space-y-4"
                >
                    <div>
                        <Label>{t.auth.email}</Label>
                        <Input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={forgot.isPending}>
                        {forgot.isPending ? t.auth.sendingReset : t.auth.resetCta}
                    </Button>
                </form>
            )}

            <p className="mt-6 text-center text-sm text-current/60">
                <Link to="/login" className="font-medium text-ink dark:text-chrome hover:underline">
                    {t.auth.backToLogin}
                </Link>
            </p>
        </AuthLayout>
    );
}