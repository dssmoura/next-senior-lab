"use client";

import React from "react";
import { FormField } from "@/shared/components/molecules/FormField";
import { FormGroup } from "@/shared/components/molecules/FormGroup";
import { Button } from "@/shared/components/atoms/Button";

export type LoginBoxProps = {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
};

export const LoginBox: React.FC<LoginBoxProps> = ({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div className="max-w-md w-full p-6 rounded-lg shadow-sm bg-blue-50">
      <h2 className="text-2xl text-blue-700 font-semibold mb-4">Entrar</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <FormGroup>
          <FormField
            id="email"
            label="Email"
            placeholder="you@exemplo.com"
            type="email"
            required
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />

          <FormField
            id="password"
            label="Senha"
            placeholder="••••••••"
            type="password"
            required
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>}

          <div className="pt-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </FormGroup>
      </form>
    </div>
  );
};
