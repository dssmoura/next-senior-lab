"use client";

import { authService } from "@/features/auth/services/authService";
import { setToken } from "@/features/auth/utils/token";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LoginRequest } from "@/shared/types/auth";

export function useLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogin(form: LoginRequest) {
    try {
      setLoading(true);

      const response = await authService.login(form);

      const token = response?.token;

      if (!token) throw new Error("Token não encontrado na resposta");

      setToken(token);

      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return { loading, handleLogin };
}
