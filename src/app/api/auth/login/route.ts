import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === "admin@admin.com" && password === "123456") {
    return NextResponse.json({
      token: "TOKEN_DE_EXEMPLO",
      user: {
        id: 1,
        name: "Administrador",
        email,
      },
    });
  }

  return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
}
