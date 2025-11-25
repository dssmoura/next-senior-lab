import { api } from "@/shared/services/api";
import type { LoginRequest, LoginResponse } from "@/shared/types/auth";

export const authService = {
  login: (data: LoginRequest) => api.post<LoginResponse>("/auth/login", data),
};
