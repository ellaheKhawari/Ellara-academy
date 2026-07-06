import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMe } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";
import { authRepository } from "@/services/repositories/authRepository";
import { LoadingPage } from "@/components/ui/LoadingPage";

export function ProtectedRoute() {
  const hasToken = Boolean(authRepository.getToken());
  const { isLoading, isError } = useMe();
  const user = useAuthStore((s) => s.user);
  const [minDelayDone, setMinDelayDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMinDelayDone(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  if (!hasToken) return <Navigate to="/login" replace />;
  if ((isLoading || !minDelayDone) && !user) return <LoadingPage />;
  if (isError && !user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
