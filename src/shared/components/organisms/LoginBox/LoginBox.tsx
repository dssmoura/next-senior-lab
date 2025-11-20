"use client";

import React, { useState } from "react";
import { FormField } from "@/shared/components/molecules/FormField";
import { FormGroup } from "@/shared/components/molecules/FormGroup";
import { Button } from "@/shared/components/atoms/Button";

export type LoginBoxProps = {
  onSubmit?: (data: { email: string; password: string }) => void;
};

export const LoginBox: React.FC<LoginBoxProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <div className="max-w-md w-full p-6 rounded-lg shadow-sm bg-blue-50">
      <h2 className="text-2xl text-blue-700 font-semibold mb-4">Entrar</h2>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormField
            id="email"
            label="Email"
            placeholder="you@exemplo.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormField
            id="password"
            label="Senha"
            placeholder="••••••••"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-2">
            <Button type="submit">Entrar</Button>
          </div>
        </FormGroup>
      </form>
    </div>
  );
};
