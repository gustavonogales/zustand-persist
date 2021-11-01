import React, { ReactNode } from "react";
import {
  RadioGroup as MuiRadioGroup,
  Radio,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface RadioGroupProps {
  name: string;
  label: string;
  control: Control;
  error?: any;
  flexDiretion?: "row" | "column";
  children: ReactNode;
}

export function RadioGroup({
  name,
  label,
  control,
  error,
  flexDiretion = "column",
  children,
  ...props
}: RadioGroupProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl component="fieldset" error={!!error?.message}>
          <FormLabel component="legend">{label}</FormLabel>
          <MuiRadioGroup
            onChange={onChange}
            value={value ?? ""}
            sx={{ flexDirection: flexDiretion }}
          >
            {children}
            <FormHelperText>{error?.message || ""}</FormHelperText>
          </MuiRadioGroup>
        </FormControl>
      )}
    />
  );
}
