"use client";
import { LoginBox } from "@/shared/components/organisms/LoginBox";

export default function LoginPage() {
  const handleSubmit = (data: { email: string; password: string }) => {
    console.log("Login:", data);
    // futura integração com useAuth / API
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <LoginBox onSubmit={handleSubmit} />
    </main>
  );
}
