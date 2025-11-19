import React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
  visuallyHidden?: boolean;
};

export const Label: React.FC<LabelProps> = ({
  children,
  visuallyHidden,
  className = "",
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={`${visuallyHidden ? "sr-only" : ""} block text-sm font-medium ${className}`}
    >
      {children}
    </label>
  );
};
