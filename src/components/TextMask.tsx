import React from "react";
import { IMaskInput } from "react-imask";

interface TextMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  maskDefinitions: {
    mask: string;
    definitions: object;
  };
}

export const TextMask = React.forwardRef<HTMLElement, any>(function TextMask(
  props,
  ref
) {
  const { onChange, maskDefinitions, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={maskDefinitions.mask}
      definitions={maskDefinitions.definitions}
      inputRef={ref}
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});
