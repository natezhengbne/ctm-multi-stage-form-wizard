import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";

type Props = {
  activeStep: number;
  step: number;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepSummary(props: Props) {
  
  if (props.activeStep !== props.step) {
    return null;
  }

  function save() {
    console.log(props.value);
  }

  function prev() {
    props.onPrev();
  }

  return (
    <>
      <div id="personal-form" className="StepperForm-root container-sm">
        <h1>Summary</h1>
        <div className="StepperActions-root">
          <button className="btn btn-secondary m-3" onClick={prev}>
            Back
          </button>
          <button type="submit" className="btn btn-primary" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
