"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import bcrypt from "bcryptjs";
import {
  AUTH_SESSION_KEY,
  AUTH_USERS_KEY,
  type SessionUser,
  type StoredUser,
} from "@/lib/auth/config";

export interface AuthResult {
  success: boolean;
  message: string;
}

interface AuthContextValue {
  user: SessionUser | null;
  ready: boolean;
  register: (values: { fullName: string; email: string; password: string }) => AuthResult;
  login: (values: { email: string; password: string }) => AuthResult;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readUsers(): StoredUser[] {
  try {
    const raw = window.localStorage.getItem(AUTH_USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  window.localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function toSessionUser(user: StoredUser): SessionUser {
  return { id: user.id, fullName: user.fullName, email: user.email };
}

function readSession(): SessionUser | null {
  try {
    const raw = window.localStorage.getItem(AUTH_SESSION_KEY);
    return raw ? (JSON.parse(raw) as SessionUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);

  // Sync from storage after mount (avoids a server/client mismatch).
  useEffect(() => {
    setUser(readSession());
    setReady(true);
  }, []);

  const register = useCallback((values: { fullName: string; email: string; password: string }): AuthResult => {
    const email = values.email.trim().toLowerCase();
    const users = readUsers();

    if (users.some((u) => u.email === email)) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      fullName: values.fullName.trim(),
      email,
      // Hashed client-side before it ever touches storage. This is still
      // a browser-only demo account, not a securely hosted one — see
      // README for what a real backend would need to add.
      passwordHash: bcrypt.hashSync(values.password, 10),
    };

    writeUsers([...users, newUser]);
    const session = toSessionUser(newUser);
    window.localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    setUser(session);

    return { success: true, message: `Welcome, ${newUser.fullName.split(" ")[0]}.` };
  }, []);

  const login = useCallback((values: { email: string; password: string }): AuthResult => {
    const email = values.email.trim().toLowerCase();
    const users = readUsers();
    const found = users.find((u) => u.email === email);

    if (!found || !bcrypt.compareSync(values.password, found.passwordHash)) {
      return { success: false, message: "Incorrect email or password." };
    }

    const session = toSessionUser(found);
    window.localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    setUser(session);

    return { success: true, message: `Welcome back, ${found.fullName.split(" ")[0]}.` };
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_SESSION_KEY);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, ready, register, login, logout }),
    [user, ready, register, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
