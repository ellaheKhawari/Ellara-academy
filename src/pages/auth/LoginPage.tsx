import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useLogin } from "@/hooks/useAuth";

export function LoginPage() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const login = useLogin();

    const form = useForm({
        defaultValues: { email: "demo@Ellara.com", password: "demo1234" },
        onSubmit: async ({ value }) => {
            try {
                await login.mutateAsync(value);
                toast.success(t.auth.welcomeBack);
                navigate("/dashboard");
            } catch (err) {
                toast.error(err instanceof Error ? err.message : t.auth.genericError);
            }
        },
    });

    return (
        <AuthLayout title={t.auth.loginTitle} subtitle={t.auth.loginSubtitle}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <form.Field name="email">
                    {(field) => (
                        <div>
                            <Label>{t.auth.email}</Label>
                            <Input
                                type="email"
                                required
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="you@example.com"
                            />
                        </div>
                    )}
                </form.Field>

                <form.Field name="password">
                    {(field) => (
                        <div>
                            <div className="flex items-center justify-between">
                                <Label className="mb-0">{t.auth.password}</Label>
                                <Link to="/forgot-password" className="text-xs font-medium text-ink dark:text-chrome hover:underline">
                                    {t.auth.forgotLink}
                                </Link>
                            </div>
                            <Input
                                type="password"
                                required
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="••••••••"
                                className="mt-1.5"
                            />
                        </div>
                    )}
                </form.Field>

                <Button type="submit" className="w-full" size="lg" disabled={login.isPending}>
                    {login.isPending ? t.auth.loggingIn : t.auth.loginCta}
                </Button>

                <p className="text-xs text-current/40">
                    {t.auth.demoAccountLabel} <span className="font-mono-num">demo@Ellara.com</span>, {t.auth.demoPasswordLabel}{" "}
                    <span className="font-mono-num">demo1234</span>
                </p>
            </form>

            <p className="mt-6 text-center text-sm text-current/60">
                {t.auth.noAccount}{" "}
                <Link to="/register" className="font-medium text-ink dark:text-chrome hover:underline">
                    {t.auth.signUp}
                </Link>
            </p>
        </AuthLayout>
    );
}