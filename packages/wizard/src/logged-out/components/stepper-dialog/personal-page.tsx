import { Button, DialogActions, DialogContent, FormControl, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { StepperContext } from ".";
import * as yup from "yup";
import { Personal } from "@ctm-multi-stage-wizard/common/data-type/compare-form";

export default function PersonalPage() {
  const stepper = useContext(StepperContext);

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("Required")
      .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, {
        message: "Input like Martin-King, Jr d'Arras.",
      }),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    phone: yup.string().matches(/^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/, {
      message: "Input valid phone number",
    }),
  });

  const formik = useFormik({
    initialValues: stepper.compareForm.personal ?? ({} as Personal),
    validationSchema: validationSchema,
    onSubmit: (value) => {
      stepper.setCompareForm({
        ...stepper.compareForm,
        personal: value,
      });

      stepper.next();
    },
  });

  function handleNext() {
    stepper.next();
    // formik.submitForm();
  }

  const handleChange = (value: any, name: string) => {
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              required
              label={"First Name"}
              name={"firstName"}
              fullWidth
              value={formik.values.firstName ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.firstName) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.firstName : undefined}
              inputProps={{
                maxLength: 12,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label={"Last Name"}
              name={"lastName"}
              fullWidth
              value={formik.values.lastName ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.lastName) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.lastName : undefined}
              inputProps={{
                maxLength: 12,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label={"Email"}
              name={"email"}
              fullWidth
              value={formik.values.email ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.email) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.email : undefined}
              inputProps={{
                maxLength: 36,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Phone"}
              name={"phone"}
              fullWidth
              value={formik.values.phone ?? ""}
              onChange={(event) => handleChange(event.target.value, event.target.name)}
              error={Boolean(formik.errors.phone) && formik.submitCount > 0}
              helperText={formik.submitCount > 0 ? formik.errors.phone : undefined}
              inputProps={{
                maxLength: 12,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" disableElevation disabled>
          Back
        </Button>
        <Button color="primary" onClick={handleNext}>
          Next
        </Button>
      </DialogActions>
    </>
  );
}
