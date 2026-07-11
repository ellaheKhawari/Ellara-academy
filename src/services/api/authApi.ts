import type { AuthResponse, LoginPayload, RegisterPayload, User } from "@/types";

interface StoredUser extends User {
  password: string;
}

const DB_KEY = "Ellara-mock-db";

function loadDb(): StoredUser[] {
  const raw = window.localStorage.getItem(DB_KEY);
  if (raw) {
    try {
      return JSON.parse(raw) as StoredUser[];
    } catch {
      /* fall through */
    }
  }
  const seed: StoredUser[] = [
    {
      id: "u_demo",
      fullName: "Demo Student",
      email: "demo@Ellara.com",
      password: "demo1234",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
      language: "es",
      joinedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 40).toISOString(),
      streakDays: 14,
    },
  ];
  window.localStorage.setItem(DB_KEY, JSON.stringify(seed));
  return seed;
}

function saveDb(db: StoredUser[]) {
  window.localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function delay<T>(value: T, ms = 700): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function makeFakeJwt(user: User): string {
  const header = btoa(JSON.stringify({ alg: "mock", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({ sub: user.id, email: user.email, iat: Date.now(), exp: Date.now() + 1000 * 60 * 60 * 24 * 7 })
  );
  const signature = btoa(`mock-signature-${user.id}`);
  return `${header}.${payload}.${signature}`;
}

function decodeFakeJwt(token: string): { sub: string; exp: number } | null {
  try {
    const [, payload] = token.split(".");
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

function toPublicUser(u: StoredUser): User {
  const { password: _password, ...rest } = u;
  void _password;
  return rest;
}

export const authApi = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const db = loadDb();
    const found = db.find((u) => u.email.toLowerCase() === payload.email.toLowerCase());
    await delay(null, 500);
    if (!found || found.password !== payload.password) {
      throw new Error("Invalid email or password.");
    }
    const user = toPublicUser(found);
    return { user, token: makeFakeJwt(user) };
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const db = loadDb();
    if (db.some((u) => u.email.toLowerCase() === payload.email.toLowerCase())) {
      await delay(null, 400);
      throw new Error("An account with this email already exists.");
    }
    const newUser: StoredUser = {
      id: `u_${Math.random().toString(36).slice(2, 10)}`,
      fullName: payload.fullName,
      email: payload.email,
      password: payload.password,
      avatarUrl: `https://i.pravatar.cc/150?u=${encodeURIComponent(payload.email)}`,
      language: payload.language,
      joinedAt: new Date().toISOString(),
      streakDays: 0,
    };
    db.push(newUser);
    saveDb(db);
    await delay(null, 600);
    const user = toPublicUser(newUser);
    return { user, token: makeFakeJwt(user) };
  },

  async forgotPassword(email: string): Promise<{ message: string }> {
    await delay(null, 600);
    return { message: `If an account exists for ${email}, a reset link has been sent.` };
  },

  async me(token: string): Promise<User> {
    await delay(null, 350);
    const decoded = decodeFakeJwt(token);
    if (!decoded || decoded.exp < Date.now()) {
      throw new Error("Session expired.");
    }
    const db = loadDb();
    const found = db.find((u) => u.id === decoded.sub);
    if (!found) throw new Error("User not found.");
    return toPublicUser(found);
  },

  async logout(): Promise<{ success: true }> {
    await delay(null, 200);
    return { success: true };
  },
};
