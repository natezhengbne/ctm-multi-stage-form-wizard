import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";
import NavBar from "../navigation/nav-bar";
import StepAddress from "./step-address";
import StepPersonal from "./step-personal";
import StepSummary from "./step-summary";
import "./layout.css";

export const MAX_STEP = 3;
export const START_STEP = 1;

export default function NoFancyLibrariesPage() {
  const [activeStep, setActiveStep] = useState(START_STEP);
  const [compareForm, setCompareForm] = useState<CompareForm>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {}

  function handNext(value: CompareForm) {
    if (activeStep === MAX_STEP) {
      return;
    }
    setActiveStep(activeStep + 1);
    setCompareForm(value);
  }

  function handlePrev() {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <NavBar />
      <StepPersonal step={1} activeStep={activeStep} onNext={handNext} onPrev={handlePrev} value={compareForm} />
      <StepAddress step={2} activeStep={activeStep} onNext={handNext} onPrev={handlePrev} value={compareForm} />
      <StepSummary step={3} activeStep={activeStep} onPrev={handlePrev} value={compareForm} />
    </>
  );
}
