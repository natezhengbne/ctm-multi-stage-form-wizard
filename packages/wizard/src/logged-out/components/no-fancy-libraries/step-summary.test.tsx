import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import React from "react";
import StepSummary from "./step-summary";
import NoFancyLibrariesPage from ".";

describe("The page of step-summary renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<StepSummary step={1} activeStep={1} onPrev={jest.fn()} value={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Integration test", () => {
  it("the completed data must be displayed back to the user on the summary page", () => {
    const wrapper = mount(<NoFancyLibrariesPage />);

    let stepPerson = wrapper.find("StepPersonal");
    let stepAddress = wrapper.find("StepAddress");
    let stepSummary = wrapper.find("StepSummary");

    // The first page -> StepPersonal
    expect(stepPerson.html()).not.toBeNull();
    expect(stepAddress.html()).toBeNull();
    expect(stepSummary.html()).toBeNull();

    mockStepPersonal(stepPerson);

    // The second page -> StepAddress
    stepPerson = wrapper.find("StepPersonal");
    stepAddress = wrapper.find("StepAddress");
    stepSummary = wrapper.find("StepSummary");

    expect(stepPerson.html()).toBeNull();
    expect(stepAddress.html()).not.toBeNull();
    expect(stepSummary.html()).toBeNull();

    mockStepAddress(stepAddress);

    // The final page -> StepSummary
    stepPerson = wrapper.find("StepPersonal");
    stepAddress = wrapper.find("StepAddress");
    stepSummary = wrapper.find("StepSummary");

    expect(stepPerson.html()).toBeNull();
    expect(stepAddress.html()).toBeNull();
    expect(stepSummary.html()).not.toBeNull();

    mockStepSummary(stepSummary);
  });
});

function mockStepPersonal(stepPerson: ReactWrapper) {
  stepPerson.find('input[id="firstName"]').simulate("change", {
    target: {
      value: "testFirstName",
    },
  });
  stepPerson.find('input[id="lastName"]').simulate("change", {
    target: {
      value: "testLastName",
    },
  });
  stepPerson.find('input[id="email"]').simulate("change", {
    target: {
      value: "email@email.com",
    },
  });
  stepPerson.find('input[id="phone"]').simulate("change", {
    target: {
      value: "testPhone",
    },
  });
  stepPerson.find('form[id="personal-form"]').simulate("submit", { preventDefault() {} });
}

function mockStepAddress(stepAddress: ReactWrapper) {
  stepAddress.find('input[id="streetNumber"]').simulate("change", {
    target: {
      value: "3",
    },
  });
  stepAddress.find('input[id="streetName"]').simulate("change", {
    target: {
      value: "nelson",
    },
  });
  stepAddress.find('select[id="streetType"]').simulate("change", {
    target: {
      value: "Ave",
    },
  });
  stepAddress.find('input[id="suburb"]').simulate("change", {
    target: {
      value: "indooroopilly",
    },
  });
  stepAddress.find('input[id="postcode"]').simulate("change", {
    target: {
      value: "4068",
    },
  });
  stepAddress.find('form[id="address-form"]').simulate("submit", { preventDefault() {} });
}

function mockStepSummary(stepSummary: ReactWrapper) {
  expect(stepSummary.find('input[id="firstName"]').prop("value")).toEqual("testFirstName");
  expect(stepSummary.find('input[id="lastName"]').prop("value")).toEqual("testLastName");
  expect(stepSummary.find('input[id="email"]').prop("value")).toEqual("email@email.com");
  expect(stepSummary.find('input[id="phone"]').prop("value")).toEqual("testPhone");

  expect(stepSummary.find('input[id="streetNumber"]').prop("value")).toEqual("3");
  expect(stepSummary.find('input[id="streetType"]').prop("value")).toEqual("Ave");
  expect(stepSummary.find('input[id="suburb"]').prop("value")).toEqual("indooroopilly");
  expect(stepSummary.find('input[id="postcode"]').prop("value")).toEqual("4068");
}
