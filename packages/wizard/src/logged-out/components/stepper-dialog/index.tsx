import DialogTitleWithCloseIcon from "@ctm-multi-stage-wizard/common/components/dialog-title-with-close-icon";
import { Button, Dialog, DialogContent, DialogTitle, Step, StepLabel, Stepper } from "@material-ui/core";
import React, { createContext, useCallback, useState } from "react";
import StepperControl from "./stepper-control";

export type StepperContext = {
  activeStep: number;
  next: () => void;
  back: () => void;
};

const DEFAULT_STEPPER_VALUE: StepperContext = {
  activeStep: 0,
  next: () => {},
  back: () => {},
};

const MAX_STEP = 3;

export const StepperContext = createContext<StepperContext>(DEFAULT_STEPPER_VALUE);

export const useStepperContext = (): StepperContext => {
  const [activeStep, setActiveStep] = useState(0);

  console.log(activeStep);

  const next = () => {      
    if (activeStep < MAX_STEP) {
        setActiveStep(activeStep + 1);
      }
  }

  const back = () => {
    if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      }
  }

  return {
    activeStep,
    next,
    back,
  };
};

export default function StepperDialog() {
  const [open, setOpen] = useState(false);
  const stepperContext = useStepperContext();

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <StepperContext.Provider value={stepperContext}>
        <Button size="small" color="primary" onClick={() => setOpen(true)}>
          View
        </Button>
        <Dialog fullWidth={true} maxWidth={"md"} open={open} onClose={handleClose} disableBackdropClick>
          <DialogTitleWithCloseIcon title="Compare" handleClose={handleClose} />
          <DialogContent>
            <StepperControl />
          </DialogContent>
        </Dialog>
      </StepperContext.Provider>
    </>
  );
}
