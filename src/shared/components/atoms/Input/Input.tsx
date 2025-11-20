import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          block w-full rounded-md border-2 border-blue-400
          px-3 py-2 text-sm text-blue-600
          placeholder:text-blue-400
          focus:outline-none focus:ring-2 focus:ring-blue-600
          ${className}
        `}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
