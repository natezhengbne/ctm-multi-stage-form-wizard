import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import StepAddress from "./step-address";

describe("The page of step-address renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(
      <StepAddress step={1} activeStep={1} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("page not active", () => {
    let wrapper = shallow(
      <StepAddress step={1} activeStep={3} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );
    expect(wrapper.html()).toEqual(null);
  });

  test("all form fields", () => {
    let wrapper = shallow(
      <StepAddress step={1} activeStep={1} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );

    expect(wrapper.find('input[id="streetNumber"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "streetNumber",
        type: "number",
      })
    );
    expect(wrapper.find('input[id="streetName"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "streetName",
      })
    );
    expect(wrapper.find('select[id="streetType"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "streetType",
      })
    );
    expect(wrapper.find('input[id="suburb"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "suburb",
      })
    );
    expect(wrapper.find('input[id="postcode"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "postcode",
      })
    );
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
  });
});

describe("The page of step-personal submit form", () => {
  let wrapper: ShallowWrapper;
  let nextCb: jest.Mock;
  let prevCb: jest.Mock;
  beforeEach(() => {
    nextCb = jest.fn((value: CompareForm) => {});
    prevCb = jest.fn();
    wrapper = shallow(<StepAddress step={1} activeStep={1} onNext={nextCb} onPrev={prevCb} value={undefined} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("subbmit form", () => {
    wrapper.find('input[id="streetNumber"]').simulate("change", {
      target: {
        value: "3",
      },
    });
    wrapper.find('input[id="streetName"]').simulate("change", {
      target: {
        value: "nelson",
      },
    });
    wrapper.find('select[id="streetType"]').simulate("change", {
      target: {
        value: "Ave",
      },
    });
    wrapper.find('input[id="suburb"]').simulate("change", {
      target: {
        value: "indooroopilly",
      },
    });
    wrapper.find('input[id="postcode"]').simulate("change", {
      target: {
        value: "4068",
      },
    });
    wrapper.find('form[id="address-form"]').simulate("submit", { preventDefault() {} });
    expect(nextCb).toBeCalledWith({
      address: {
        streetNumber: "3",
        streetName: "nelson",
        streetType: "Ave",
        suburb: "indooroopilly",
        postcode: "4068",
      },
    } as CompareForm);
  });
});
