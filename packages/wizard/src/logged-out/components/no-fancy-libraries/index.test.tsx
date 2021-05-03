import { mount, shallow } from "enzyme";
import React from "react";
import NoFancyLibrariesPage from ".";

describe("The entry point of no fancy libraries stepper renders", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<NoFancyLibrariesPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
