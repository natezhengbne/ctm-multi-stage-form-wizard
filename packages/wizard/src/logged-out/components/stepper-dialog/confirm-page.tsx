import { Button, DialogActions, DialogContent } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { StepperContext } from ".";

export default function ConfirmPage() {
  const stepper = useContext(StepperContext);

  function handleSave() {}

  function handleBack() {
    stepper.back();
  }

  return (
    <>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </>
  );
}
