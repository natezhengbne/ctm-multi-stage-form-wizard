import { Button, DialogActions, DialogContent, FormControl, Grid, TextField } from "@material-ui/core";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { StepperContext } from ".";
import { useFormik } from "formik";
import * as yup from "yup";
import { Address, streetTypes } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason } from "@material-ui/lab";
import { Suburb } from "@ctm-multi-stage-wizard/common/data-type/suggention";
import { getSuggestions } from "@ctm-multi-stage-wizard/common/data-service/common-data-client";
import { isBlank } from "@ctm-multi-stage-wizard/common/functions/value-utils";

export default function AddressPage() {
  const stepper = useContext(StepperContext);
  const [suburbOptions, setSuburbOptions] = useState<Suburb[]>();
  const [suburbSelected, setSuburbselected] = useState<Suburb>({
    display: {
      text: stepper?.compareForm?.address?.suburb,
    },
    source: {
      name: stepper?.compareForm?.address?.suburb,
    },
  } as Suburb);
  const [suburbInput, setSuburbInput] = useState<string>();

  const validationSchema = yup.object().shape({
    streetNumber: yup.string().required("Required"),
    streetName: yup.string().required("Required"),
    streetType: yup.string().required("Required"),
    suburb: yup.string().required("Required"),
    postcode: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: stepper.compareForm.address ?? ({} as Address),
    validationSchema: validationSchema,
    onSubmit: (value) => {
      stepper.setCompareForm({
        ...stepper.compareForm,
        address: value,
      });
      stepper.next();
    },
  });

  function handleNext() {
    formik.submitForm();
  }

  const handleChange = (value: any, name: string) => {
    formik.setFieldValue(name, value);
  };

  function handleBack() {
    stepper.back();
  }

  useEffect(() => {
    if (suburbInput === undefined) {
      return;
    }
    getSuggestions(suburbInput).then((v) => {
      const suggestions = [...v._embedded.suggestions];
      let filterResult = suggestions.filter(
        (suggestion) => !isBlank(suggestion?.source.name) && !isBlank(suggestion?.source.postcode)
      );
      setSuburbOptions(suburbSelected ? [suburbSelected, ...filterResult] : filterResult);
    });
  }, [suburbInput]);

  return (
    <>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              required
              label={"Street Number"}
              name={"streetNumber"}
              fullWidth
              value={formik.values.streetNumber ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.streetNumber) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.streetNumber : undefined}
              inputProps={{
                maxLength: 6,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label={"Street Name"}
              name={"streetName"}
              fullWidth
              value={formik.values.streetName ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.streetName) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.streetName : undefined}
              inputProps={{
                maxLength: 12,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Autocomplete
                disableClearable
                getOptionSelected={(option, value) => option === value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"Street Type"}
                    required
                    error={Boolean(formik.errors.streetType) && formik.submitCount > 0}
                    helperText={formik.submitCount > 0 ? formik.errors.streetType : undefined}
                  />
                )}
                options={streetTypes}
                value={stepper?.compareForm?.address?.streetType}
                onChange={(event, value: string | undefined, reason) => handleChange(value, "streetType")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Autocomplete
                disableClearable
                options={suburbOptions ?? []}
                getOptionSelected={(option, value) => {
                  return option.source.name === value.source.name;
                }}
                getOptionLabel={(option) => option?.source.name ?? ""}
                renderOption={(option) => {
                  return <>{option.display.text}</>;
                }}
                filterOptions={(x) => x}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"Suburb"}
                    required
                    error={Boolean(formik.errors.suburb) && formik.submitCount > 0}
                    helperText={formik.submitCount > 0 ? formik.errors.suburb : undefined}
                  />
                )}
                onInputChange={(event, newInputValue) => {
                  if (isBlank(newInputValue) || newInputValue.length <= 1 || event?.type !== "change") {
                    return;
                  }
                  setSuburbInput(newInputValue);
                }}
                onChange={(
                  event: ChangeEvent<{}>,
                  value: Suburb | undefined,
                  reason: AutocompleteChangeReason,
                  details?: AutocompleteChangeDetails<Suburb> | undefined
                ) => {
                  if (value === undefined) {
                    return;
                  }
                  setSuburbselected(value);
                  handleChange(value.source.name, "suburb");
                  handleChange(value.source.postcode, "postcode");
                }}
                value={suburbSelected}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              required
              InputProps={{
                readOnly: true,
              }}
              label={"Postcode"}
              name={"postcode"}
              fullWidth
              value={formik.values.postcode ?? ""}
              error={Boolean(formik.errors.postcode) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.postcode : undefined}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" onClick={handleNext}>
          Next
        </Button>
      </DialogActions>
    </>
  );
}
