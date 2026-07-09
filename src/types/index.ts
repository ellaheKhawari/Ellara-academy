export interface User {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  language: "en" | "zh" | "ko" | "es" | "fa";
  joinedAt: string;
  streakDays: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  language: "en" | "zh" | "ko" | "es" | "fa";
}

export interface AuthResponse {
  user: User;
  token: string;
}

export type LanguageId = "en" | "zh" | "ko" | "es" | "fa";
