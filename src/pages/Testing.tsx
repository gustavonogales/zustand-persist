import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  MenuItem,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RadioGroup } from "../components/RadioGroup";
import { Select } from "../components/Select";

const formSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Senha obrigatória"),
  testRadio: yup.string().required("Selecione uma opção"),
  testSelect: yup.string().required("Selecione uma opção"),
});

export function Testing() {
  const { handleSubmit, register, control, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  function handleSave(data: any) {
    console.log(data);
  }

  return (
    <Box display="flex" justifyContent="center">
      <Stack
        component="form"
        onSubmit={handleSubmit(handleSave)}
        width="500px"
        gap={2}
      >
        <Input
          name="name"
          label="Nome"
          control={control}
          error={errors?.name}
          maskDefinitions={{
            mask: "(#00) 000",
            definitions: {
              "#": /[1-9]/,
            },
          }}
        />
        <Input
          name="password"
          label="Senha"
          control={control}
          error={errors?.password}
        />
        <RadioGroup
          control={control}
          name="testRadio"
          label="Gender"
          error={errors?.testRadio}
          // flexDiretion="row"
        >
          <FormControlLabel value={1} label="Option 1" control={<Radio />} />
          <FormControlLabel value={2} label="Option 2" control={<Radio />} />
        </RadioGroup>
        <Select
          control={control}
          name="testSelect"
          label="Numeros"
          error={errors?.testSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button type="submit">Save</Button>
      </Stack>
    </Box>
  );
}
