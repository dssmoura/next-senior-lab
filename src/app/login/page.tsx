"use client";

import { LoginBox } from "@/shared/components/organisms/LoginBox";
import { authService } from "@/shared/services/authService";

export default function LoginPage() {
  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await authService.login(data);

      console.log("Token:", response.token);
      alert("Login OK! Token: " + response.token);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <LoginBox onSubmit={handleSubmit} />
    </main>
  );
}
