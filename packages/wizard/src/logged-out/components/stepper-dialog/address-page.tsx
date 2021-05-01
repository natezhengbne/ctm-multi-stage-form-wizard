import { Button, DialogActions } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { StepperContext } from ".";

export default function AddressPage() {
  const stepper = useContext(StepperContext);

  function handleNext() {
    stepper.next();
  }

  function handleBack() {
    stepper.back();
  }

  return (
    <>
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
