import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import StepPersonal from "./step-personal";
import StepSummary from "./step-summary";

describe("The page of step-summary renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<StepSummary step={1} activeStep={1} onPrev={jest.fn()} value={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});

// describe("The page of step-summary integration test", () => {
//     let wrapperStepPersonal: ShallowWrapper = shallow(<StepPersonal step={1} activeStep={1} onNext={jest.fn()} onPrev={prevCb} value={undefined} />);
//   let nextCb: jest.Mock;
//   let prevCb: jest.Mock;
//   beforeEach(() => {
//     nextCb = jest.fn((value: CompareForm) => {});
//     prevCb = jest.fn();
//     wrapper 
//   });
// });
