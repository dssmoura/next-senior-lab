import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="px-4 py-2 rounded bg-blue-600 text-white font-medium">
      {label}
    </button>
  );
}
