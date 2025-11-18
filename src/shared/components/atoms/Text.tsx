import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Text({ children, size = "md" }: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return <p className={sizes[size]}>{children}</p>;
}
