"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@/features/users/services/userService";

export function useUserProfile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    getUserProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  return { profile };
}
