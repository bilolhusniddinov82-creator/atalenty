export const AUTH_USERS_KEY = "attestly-users";
export const AUTH_SESSION_KEY = "attestly-session";

export interface StoredUser {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
}

export interface SessionUser {
  id: string;
  fullName: string;
  email: string;
}
