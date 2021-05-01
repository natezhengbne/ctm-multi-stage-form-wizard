import DialogTitleWithCloseIcon from "@ctm-multi-stage-wizard/common/components/dialog-title-with-close-icon";
import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { Button, Dialog, makeStyles } from "@material-ui/core";
import React, { createContext, useState } from "react";
import StepperControl from "./stepper-control";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
  },
}));

export type StepperContext = {
  activeStep: number;
  next: () => void;
  back: () => void;
  compareForm: CompareForm;
  setCompareForm: (compareForm: CompareForm) => void;
};

const DEFAULT_STEPPER_VALUE: StepperContext = {
  activeStep: 0,
  next: () => {},
  back: () => {},
  compareForm: {},
  setCompareForm: () => {},
};

const MAX_STEP = 3;

export const StepperContext = createContext<StepperContext>(DEFAULT_STEPPER_VALUE);

export const useStepperContext = (): StepperContext => {
  const [activeStep, setActiveStep] = useState(0);
  const [compareForm, setCompareForm] = useState({});

  const next = () => {
    if (activeStep < MAX_STEP) {
      setActiveStep(activeStep + 1);
    }
  };

  const back = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return {
    activeStep,
    next,
    back,
    compareForm,
    setCompareForm,
  };
};

export default function StepperDialog() {
  const classes = useStyles();
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
        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
          disableBackdropClick
          classes={{
            paper: classes.dialogPaper,
          }}
          keepMounted={false}
        >
          <DialogTitleWithCloseIcon title="Compare" handleClose={handleClose} />
          <StepperControl />
        </Dialog>
      </StepperContext.Provider>
    </>
  );
}
