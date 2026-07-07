import Cookies from "js-cookie";
import { authApi } from "@/services/api/authApi";
import type { LoginPayload, RegisterPayload, User } from "@/types";

const TOKEN_COOKIE = "Ellara_token";

export const authRepository = {
  getToken(): string | undefined {
    return Cookies.get(TOKEN_COOKIE);
  },

  setToken(token: string) {
    Cookies.set(TOKEN_COOKIE, token, { expires: 7, sameSite: "lax" });
  },

  clearToken() {
    Cookies.remove(TOKEN_COOKIE);
  },

  async login(payload: LoginPayload): Promise<User> {
    const { user, token } = await authApi.login(payload);
    this.setToken(token);
    return user;
  },

  async register(payload: RegisterPayload): Promise<User> {
    const { user, token } = await authApi.register(payload);
    this.setToken(token);
    return user;
  },

  async forgotPassword(email: string) {
    return authApi.forgotPassword(email);
  },

  async me(): Promise<User> {
    const token = this.getToken();
    if (!token) throw new Error("No session token.");
    return authApi.me(token);
  },

  async logout() {
    await authApi.logout();
    this.clearToken();
  },
};
