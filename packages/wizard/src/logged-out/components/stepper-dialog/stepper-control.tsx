import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useContext } from "react";
import { StepperContext } from ".";
import AddressPage from "./address-page";
import SummaryPage from "./summary-page";
import PersonalPage from "./personal-page";

export default function StepperControl() {
  const stepper = useContext(StepperContext);

  const stepsPage: Array<{
    label: string;
    page: React.ReactNode;
  }> = [
    {
      label: "Personal",
      page: <PersonalPage />,
    },
    {
      label: "Address",
      page: <AddressPage />,
    },
    {
      label: "Confirm",
      page: <SummaryPage />,
    },
  ];

  const stepNodes = stepsPage.map((step, index) => {
    return (
      <Step key={`${step.label}`}>
        <StepLabel>{step.label}</StepLabel>
      </Step>
    );
  });

  return (
    <>
      <Stepper activeStep={stepper.activeStep} alternativeLabel>
        {stepNodes}
      </Stepper>
      {stepsPage[stepper.activeStep].page}
    </>
  );
}
