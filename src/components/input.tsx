import React from "react";
import {
  TextField as MuiInput,
  TextFieldProps as MuiInputProps,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";
import { TextMask } from "./TextMask";

interface InputProps {
  name: string;
  label?: string;
  control: Control<any>;
  error?: any;
  maskDefinitions?: {
    mask: string;
    definitions: object;
  };
  maskType?: "number" | "text";
}

export function Input({
  name,
  control,
  label,
  error,
  maskDefinitions,
  maskType,
  ...props
}: InputProps) {
  const MaskComponent = React.forwardRef<HTMLElement, any>((props, ref) => {
    return (
      <TextMask
        {...props}
        ref={ref}
        maskDefinitions={maskDefinitions}
        maskType={maskType}
      />
    );
  });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <MuiInput
          onChange={onChange}
          value={value}
          label={label}
          error={!!error}
          helperText={error ? error?.message : ""}
          InputProps={{
            inputComponent:
              maskDefinitions || maskType ? (MaskComponent as any) : undefined,
          }}
        />
      )}
    />
  );
}
