"use client";

import { LoginBox } from "@/shared/components/organisms/LoginBox";
import { useLogin } from "@/shared/hooks/useLogin";

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
