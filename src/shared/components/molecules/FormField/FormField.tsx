import React from "react";
import { Input } from "@/shared/components/atoms/Input";

export type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  className?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label htmlFor={id} className="text-blue-700 text-sm font-semibold">
        {label}
      </label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};
