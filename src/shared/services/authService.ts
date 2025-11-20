import { api } from "./api";
import type { LoginRequest, LoginResponse, Profile } from "@/shared/types/auth";

export const authService = {
  login: (data: LoginRequest) => api.post<LoginResponse>("/auth/login", data),

  getProfile: () => api.get<Profile>("/auth/profile"),
};
