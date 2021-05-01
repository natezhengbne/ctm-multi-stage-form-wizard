import { Button, DialogActions } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { StepperContext } from ".";

export default function PersonalPage() {
  const stepper = useContext(StepperContext);

  function handleNext() {
    stepper.next();
  }

  return (
    <>
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
