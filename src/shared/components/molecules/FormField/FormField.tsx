import React from "react";
import { Label } from "@/shared/components/atoms/Label";
import { Input } from "@/shared/components/atoms/Input";

export type FormFieldProps = {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  required,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-required={required}
      />
    </div>
  );
};
