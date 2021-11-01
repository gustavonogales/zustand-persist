import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import {
  RadioGroup as MuiRadioGroup,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Controller, Control, UseFormSetValue } from "react-hook-form";

interface CheckboxGroupProps {
  name: string;
  label: string;
  control: Control;
  flexDirection?: "column" | "row";
  setValue: UseFormSetValue<any>;
  error?: any;
  children?: any;
}

export function CheckboxGroup({
  name,
  label,
  control,
  flexDirection = "column",
  setValue,
  error,
  children = null,
  ...props
}: CheckboxGroupProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value]);
    }
  };

  useEffect(() => setValue(name, selectedItems), [selectedItems]);

  return (
    <FormControl component="fieldset" error={!!error?.message}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup sx={{ flexDirection: flexDirection }}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            control: (
              <Controller
                name={name}
                control={control}
                render={() => (
                  <Checkbox
                    checked={selectedItems.includes(child.props.value)}
                    onChange={() => handleSelect(child.props.value)}
                  />
                )}
              />
            ),
          })
        )}
        <FormHelperText>{error?.message || ""}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
}
