import { create } from "zustand";
import type { User } from "@/types/auth";

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "authenticated" | "unauthenticated";
  setUser: (user: User | null) => void;
  setStatus: (status: AuthState["status"]) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "idle",
  setUser: (user) => set({ user, status: user ? "authenticated" : "unauthenticated" }),
  setStatus: (status) => set({ status }),
  reset: () => set({ user: null, status: "unauthenticated" }),
}));
