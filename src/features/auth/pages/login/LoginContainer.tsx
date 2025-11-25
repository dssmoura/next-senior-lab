"use client";

import { LoginBox } from "@/features/auth/components/LoginBox";
import { useLogin } from "@/features/auth/hooks/useLogin";

export function LoginContainer() {
  const { email, password, loading, error, setEmail, setPassword, handleLogin } =
    useLogin();

  return (
    <LoginBox
      email={email}
      password={password}
      error={error}
      loading={loading}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleLogin}
    />
  );
}
