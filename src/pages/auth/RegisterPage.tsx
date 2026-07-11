import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useRegister } from "@/hooks/useAuth";
import { courses } from "@/lib/mockData";

interface LocationState {
    fullName?: string;
    email?: string;
    language?: string;
}

export function RegisterPage() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const state = (location.state as LocationState) ?? {};
    const register = useRegister();

    const form = useForm({
        defaultValues: {
            fullName: state.fullName ?? "",
            email: state.email ?? "",
            password: "",
            confirmPassword: "",
            language: (state.language ?? "en") as "en" | "zh" | "ko" | "es" | "fa",
        },
        onSubmit: async ({ value }) => {
            if (value.password !== value.confirmPassword) {
                toast.error(t.auth.passwordMismatch);
                return;
            }
            try {
                await register.mutateAsync(value);
                toast.success(t.auth.accountCreated);
                navigate("/dashboard");
            } catch (err) {
                toast.error(err instanceof Error ? err.message : t.auth.genericError);
            }
        },
    });

    return (
        <AuthLayout title={t.auth.registerTitle} subtitle={t.auth.registerSubtitle}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <form.Field name="fullName">
                    {(field) => (
                        <div>
                            <Label>{t.auth.fullName}</Label>
                            <Input required value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
                        </div>
                    )}
                </form.Field>

                <form.Field name="email">
                    {(field) => (
                        <div>
                            <Label>{t.auth.email}</Label>
                            <Input
                                type="email"
                                required
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </div>
                    )}
                </form.Field>

                <form.Field name="language">
                    {(field) => (
                        <div>
                            <Label>{t.auth.language}</Label>
                            <div className="grid grid-cols-5 gap-2">
                                {courses.map((c) => (
                                    <button
                                        type="button"
                                        key={c.id}
                                        onClick={() => field.handleChange(c.id as typeof field.state.value)}
                                        className={`flex h-10 items-center justify-center rounded-xl border text-base transition ${
                                            field.state.value === c.id
                                                ? "border-ink dark:border-cream bg-ink/20 dark:bg-chrome/15" 
                                                : "border-current/10 bg-current/5"
                                        }`}
                                    >
                                        {c.flag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </form.Field>

                <div className="grid grid-cols-2 gap-3">
                    <form.Field name="password">
                        {(field) => (
                            <div>
                                <Label>{t.auth.password}</Label>
                                <Input
                                    type="password"
                                    required
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </form.Field>
                    <form.Field name="confirmPassword">
                        {(field) => (
                            <div>
                                <Label>{t.auth.confirmPassword}</Label>
                                <Input
                                    type="password"
                                    required
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </form.Field>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={register.isPending}>
                    {register.isPending ? t.auth.creatingAccount : t.auth.registerCta}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-current/60">
                {t.auth.haveAccount}{" "}
                <Link to="/login" className="font-medium text-ink dark:text-chrome hover:underline">
                    {t.nav.login}
                </Link>
            </p>
        </AuthLayout>
    );
}