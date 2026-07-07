import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authRepository } from "@/services/repositories/authRepository";
import { useAuthStore } from "@/store/authStore";
import type { LoginPayload, RegisterPayload } from "@/types";

export const ME_QUERY_KEY = ["auth", "me"];

export function useMe() {
  const setUser = useAuthStore((s) => s.setUser);
  const setStatus = useAuthStore((s) => s.setStatus);
  const hasToken = Boolean(authRepository.getToken());

  return useQuery({
    queryKey: ME_QUERY_KEY,
    queryFn: async () => {
      setStatus("loading");
      try {
        const user = await authRepository.me();
        setUser(user);
        return user;
      } catch (err) {
        authRepository.clearToken();
        setUser(null);
        throw err;
      }
    },
    enabled: hasToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authRepository.login(payload),
    onSuccess: (user) => {
      setUser(user);
      queryClient.setQueryData(ME_QUERY_KEY, user);
    },
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authRepository.register(payload),
    onSuccess: (user) => {
      setUser(user);
      queryClient.setQueryData(ME_QUERY_KEY, user);
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => authRepository.forgotPassword(email),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const reset = useAuthStore((s) => s.reset);

  return useMutation({
    mutationFn: () => authRepository.logout(),
    onSuccess: () => {
      reset();
      queryClient.removeQueries({ queryKey: ME_QUERY_KEY });
    },
  });
}
