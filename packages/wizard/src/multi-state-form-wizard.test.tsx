import { mount, shallow, ShallowWrapper } from "enzyme";
import MultiStageFormWizard from "./multi-stage-form-wizard";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import LoggedOutComponent from "./logged-out/components/main";
import NoFancyLibrariesPage from "./logged-out/components/no-fancy-libraries";

describe("MultiStageFormWizard", () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    let wrapper: ShallowWrapper = shallow(<MultiStageFormWizard />);
    expect(wrapper).toMatchSnapshot();
  });

  test("redirect to /", () => {
    // https://github.com/enzymejs/enzyme/issues/2462
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <MultiStageFormWizard />
      </MemoryRouter>
    );

    expect(wrapper.find(LoggedOutComponent)).toHaveLength(1);
    expect(wrapper.find(NoFancyLibrariesPage)).toHaveLength(0);
  });

  test("should show root component for route not defined", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/unknown"]} initialIndex={0}>
        <MultiStageFormWizard />
      </MemoryRouter>
    );
    expect(wrapper.find(LoggedOutComponent)).toHaveLength(1);
  });
});
