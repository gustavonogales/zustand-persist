import React, { ReactNode } from "react";
import {
  Select as MuiSelect,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  control: Control;
  error?: any;
  fullWidth?: boolean;
  children: ReactNode;
}

export function Select({
  name,
  label,
  control,
  error,
  fullWidth = false,
  children,
  ...props
}: SelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl
          fullWidth={fullWidth}
          component="fieldset"
          error={!!error?.message}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <MuiSelect
            labelId={`${name}-label`}
            id={name}
            onChange={onChange}
            value={value ?? ""}
            label={label}
          >
            {children}
          </MuiSelect>
          <FormHelperText>{error?.message || ""}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
