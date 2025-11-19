import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-transparent text-gray-700";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
};
