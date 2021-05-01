import { FormControl, TextField } from "@material-ui/core";
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from "@material-ui/lab/Autocomplete";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ListboxComponent } from "./list-virtualization-adapter";

type Props<T> = {
  inputLabel: string;
  name: string;

  options?: T[];
  onChange?: (value: T | T[] | null, name: string) => void;
  value?: T | T[];
  selected?: (option: T, value: T) => boolean;
  renderOption?: (option: T, selected: boolean) => React.ReactNode;
  optionLabel?: (option: T) => string;
  large?: boolean;
  multiple?: boolean;
};

export default function AdvancedSelect<T>(props: Props<T>) {
  const [selectedValue, setSelectedValue] = useState<T | T[] | null>(props.value ?? null);

  useEffect(() => {
    setSelectedValue(props.value ?? null);
  }, [props.value]);

  const handleChange = (
    event: ChangeEvent<{}>,
    value: T | T[] | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T> | undefined
  ) => {
    setSelectedValue(value);

    if (props.onChange) {
      props.onChange(value, props.name);
    }
  };

  return (
    <FormControl fullWidth>
      <Autocomplete
        size="small"
        includeInputInList
        renderInput={(params) => <TextField {...params} label={props.inputLabel} />}
        ListboxComponent={
          props.large ? (ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>) : undefined
        }
        options={props.options ?? []}
        value={selectedValue}
        multiple={props.multiple}
        onChange={handleChange}
        renderOption={(option, { selected }) => (props.renderOption ? props?.renderOption(option, selected) : option)}
        getOptionLabel={props.optionLabel ?? ((option) => (option as unknown) as string)}
        getOptionSelected={props.selected ?? ((option, value) => option === value)}
      />
    </FormControl>
  );
}
