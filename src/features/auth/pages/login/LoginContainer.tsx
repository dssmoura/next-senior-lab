"use client";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { useState } from "react";
import { LoginBox } from "@/features/auth/components/LoginBox/LoginBox";

export function LoginContainer() {
  const { handleLogin, loading } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit() {
    setError("");

    try {
      await handleLogin({ email, password });
    } catch (err) {
      setError("Credenciais inválidas");
    }
  }

  return (
    <LoginBox
      email={email}
      password={password}
      loading={loading}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
    />
  );
}
