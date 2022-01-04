import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import InputMask from "react-input-mask";
import React from "react";
import { Input } from "../components/input";
import { Checkbox as MyCheckbox } from "../components/Checkbox";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RadioGroup } from "../components/RadioGroup";
import { Select } from "../components/Select";
import { CheckboxGroup } from "../components/CheckboxGroup";

const formSchema = yup.object().shape({
  name: yup.string(),
  maskText: yup.string().required("Campo obrigatório"),
  number: yup.string(),
  // password: yup.string().required("Senha obrigatória"),
  // testRadio: yup.string().required("Selecione uma opção"),
  // testSelect: yup.string().required("Selecione uma opção"),
  // testCheckbox: yup.array().of(yup.string()).min(1, "Selecione uma opção"),
  // testCheckbox2: yup.array().of(yup.string()).min(1, "Selecione uma opção"),
  // solutions: yup.array().of(yup.string()),
});

export function Testing() {
  const {
    handleSubmit,
    control,
    formState,
    setValue,
    register,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      maskText: "",
      name: "",
      number: "",
    },
  });
  const { errors } = formState;

  function handleSave(data: any) {
    console.log(data);
  }

  const solutions = [
    {
      label: "Aprimora",
      value: "APRIMORA",
    },
    {
      label: "Pense Matemática",
      value: "PENSE_MATEMÁTICA",
    },
    {
      label: "Lego Education",
      value: "LEGO_EDUCATION",
    },
  ];

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
          name="number"
          label="Numeros"
          control={control}
          error={errors?.name}
        />
        {/* <Input
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
        <CheckboxGroup
          setValue={setValue}
          control={control}
          name="testCheckbox"
          label="Opções"
          error={errors?.testCheckbox}
        >
          <FormControlLabel label="teste" value="1" control={<Checkbox />} />
          <FormControlLabel label="teste2" value="2" control={<Checkbox />} />
        </CheckboxGroup>
        <Controller
          name={"testCheckbox2"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" error={!!errors?.testCheckbox2}>
              <FormLabel component="legend">testCheckbox2</FormLabel>
              <FormGroup>
                <FormControlLabel
                  label="teste"
                  value="1"
                  control={<Checkbox onChange={onChange} />}
                />
                <FormControlLabel
                  label="teste2"
                  value="1"
                  control={<Checkbox onChange={onChange} />}
                />
                <FormHelperText>{errors?.testCheckbox2 || ""}</FormHelperText>
              </FormGroup>
            </FormControl>
          )}
        /> */}
        {/* <FormControlLabel
          value={1}
          control={<Checkbox />}
          label={"teste"}
          name={`techStack[${1}]`}
          inputRef={register}
        /> */}
        {/* <FormControlLabel
          control={
            <Controller
              name="options.b"
              control={control}
              render={(props) => (
                <Checkbox
                  {...props}
                  checked={props.field.value}
                  onChange={(e) => props.field.onChange(e.target.checked)}
                />
              )}
            />
          }
          label={"valor1"}
        />
        <FormControlLabel
          control={
            <Controller
              name="options.a"
              control={control}
              render={(props) => (
                <Checkbox
                  {...props}
                  checked={props.field.value}
                  onChange={(e) => props.field.onChange(e.target.checked)}
                />
              )}
            />
          }
          label={"valor 2"}
        /> */}
        {/* <FormControl component="fieldset" error={!!errors?.message}>
          <FormLabel component="legend">
            Soluções que a escola já tem:
          </FormLabel>
          <Grid container> */}
        {/* <Grid item xs={12} md={4}>
              <MyCheckbox
                control={control}
                name="solutions[0]"
                label="Aprimora"
                value="APRIMORA"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MyCheckbox
                control={control}
                name="solutions[1]"
                label="Pense Matemática"
                value="PENSE_MATEMATICA"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MyCheckbox
                control={control}
                name="solutions[2]"
                label="Lego Education"
                value="LEGO_EDUCATION"
              />
            </Grid> */}
        {/* {solutions.map((solution, index) => (
              <Grid item xs={4} key={solution.label}>
                <MyCheckbox
                  control={control}
                  name={`solutions[${index}]`}
                  label={solution.label}
                  value={solution.value}
                />
              </Grid>
            ))}
          </Grid>
          <FormHelperText>{errors?.message || ""}</FormHelperText>
        </FormControl> */}

        <Controller
          name="maskText"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask="(9) 999 999 9999"
              onChange={onChange}
              value={value}
            >
              {() => <TextField margin="normal" type="text" />}
            </InputMask>
          )}
        />
        <Button type="submit">Save</Button>
        <Button type="button" onClick={() => reset()}>
          reset
        </Button>
        <Button onClick={() => console.log(getValues())}>getValues</Button>
      </Stack>
    </Box>
  );
}
