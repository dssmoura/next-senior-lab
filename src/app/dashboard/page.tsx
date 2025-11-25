"use client";
import { UserAvatar } from "@/features/users/components/UserAvatar";
import { useUserProfile } from "@/features/users/hooks/useUserProfile";

export default function DashboardPage() {
  const { profile } = useUserProfile();

  if (!profile) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <UserAvatar name={profile.name} avatarUrl={profile.avatarUrl} />
    </div>
  );
}
