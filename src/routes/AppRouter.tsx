import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LoadingPage } from "@/components/ui/LoadingPage";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardHome } from "@/pages/dashboard/DashboardHome";
import { MyCoursesPage } from "@/pages/dashboard/MyCoursesPage";
import { SchedulePage } from "@/pages/dashboard/SchedulePage";
import { HomeworkPage } from "@/pages/dashboard/HomeworkPage";
import { MessagesPage } from "@/pages/dashboard/MessagesPage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage";

const LandingPage = lazy(() => import("@/pages/LandingPage").then((m) => ({ default: m.LandingPage })));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage").then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage").then((m) => ({ default: m.RegisterPage })));
const ForgotPasswordPage = lazy(() =>
    import("@/pages/auth/ForgotPasswordPage").then((m) => ({ default: m.ForgotPasswordPage }))
);

export function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<DashboardLayout />}>
                            <Route index element={<DashboardHome />} />
                            <Route path="courses" element={<MyCoursesPage />} />
                            <Route path="schedule" element={<SchedulePage />} />
                            <Route path="homework" element={<HomeworkPage />} />
                            <Route path="messages" element={<MessagesPage />} />
                            <Route path="settings" element={<SettingsPage />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}