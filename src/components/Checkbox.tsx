import React, { useEffect, useState } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

interface CheckboxProps {
  name: string;
  control: Control;
  label: string;
  value: string;
}

export function Checkbox({ name, value, label, control }: CheckboxProps) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <MuiCheckbox
              name={name}
              onChange={(e) => {
                console.log(e);
                onChange(value);
              }}
            />
          )}
        />
      }
    />
  );
}
