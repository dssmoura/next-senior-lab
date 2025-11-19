import React from "react";

export type FormGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export const FormGroup: React.FC<FormGroupProps> = ({ children, className = "" }) => {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
};
