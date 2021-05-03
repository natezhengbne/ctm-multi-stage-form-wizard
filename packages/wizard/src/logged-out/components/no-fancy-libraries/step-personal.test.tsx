import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import StepPersonal from "./step-personal";

describe("The page of step-personal renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(
      <StepPersonal step={1} activeStep={1} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("page not active", () => {
    let wrapper = shallow(
      <StepPersonal step={1} activeStep={3} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );
    expect(wrapper.html()).toEqual(null);
  });

  test("all form fields", () => {
    let wrapper = shallow(
      <StepPersonal step={1} activeStep={1} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />
    );

    expect(wrapper.find('input[id="firstName"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "firstName",
      })
    );
    expect(wrapper.find('input[id="lastName"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        name: "lastName",
      })
    );
    expect(wrapper.find('input[id="email"]').props()).toEqual(
      expect.objectContaining({
        required: true,
        type: "email",
        name: "email",
      })
    );
    expect(wrapper.find('input[id="phone"]').props()).toEqual(
      expect.objectContaining({
        name: "phone",
      })
    );
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
  });
});

describe("The page of step-personal interaction", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<StepPersonal step={1} activeStep={1} onNext={jest.fn()} onPrev={jest.fn()} value={undefined} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set the first name value on change event", () => {
    wrapper.find('input[id="firstName"]').simulate("change", {
      target: {
        value: "testFirstName",
      },
    });
    expect(wrapper.find('input[id="firstName"]').prop("value")).toEqual("testFirstName");
  });

  it("should set the last name value on change event", () => {
    wrapper.find('input[id="lastName"]').simulate("change", {
      target: {
        value: "testLastName",
      },
    });
    expect(wrapper.find('input[id="lastName"]').prop("value")).toEqual("testLastName");
  });

  it("should set the email value on change event", () => {
    wrapper.find('input[id="email"]').simulate("change", {
      target: {
        value: "email@email.com",
      },
    });
    expect(wrapper.find('input[id="email"]').prop("value")).toEqual("email@email.com");
  });

  it("should set the phone value on change event", () => {
    wrapper.find('input[id="phone"]').simulate("change", {
      target: {
        value: "testPhone",
      },
    });
    expect(wrapper.find('input[id="phone"]').prop("value")).toEqual("testPhone");
  });
});

describe("The page of step-personal submit form", () => {
  let wrapper: ShallowWrapper;
  let nextCb: jest.Mock;
  let prevCb: jest.Mock;
  beforeEach(() => {
    nextCb = jest.fn((value: CompareForm) => {});
    prevCb = jest.fn();
    wrapper = shallow(<StepPersonal step={1} activeStep={1} onNext={nextCb} onPrev={prevCb} value={undefined} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("subbmit form", () => {
    wrapper.find('input[id="firstName"]').simulate("change", {
      target: {
        value: "testFirstName",
      },
    });
    wrapper.find('input[id="lastName"]').simulate("change", {
      target: {
        value: "testLastName",
      },
    });
    wrapper.find('input[id="email"]').simulate("change", {
      target: {
        value: "email@email.com",
      },
    });
    wrapper.find('input[id="phone"]').simulate("change", {
      target: {
        value: "testPhone",
      },
    });
    wrapper.find('form[id="personal-form"]').simulate("submit", { preventDefault() {} });
    expect(nextCb).toBeCalledWith({
      personal: {
        firstName: "testFirstName",
        lastName: "testLastName",
        email: "email@email.com",
        phone: "testPhone",
      },
    } as CompareForm);
  });
});
