import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { mount, shallow, ShallowWrapper } from "enzyme";
import React from "react";
import StepSummary from "./step-summary";

describe("The page of step-summary renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<StepSummary step={1} activeStep={1} onPrev={jest.fn()} value={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});
