"use client";

type Props = {
  email: string;
  password: string;
  loading: boolean;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function LoginPresenter({
  email,
  password,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
    >
      <input
        type="email"
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />

      <input
        type="password"
        className="border p-2"
        placeholder="Senha"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />

      <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2">
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
