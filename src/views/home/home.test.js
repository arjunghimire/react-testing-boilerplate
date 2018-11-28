import React from "react";
import { shallow } from "enzyme";
import Home from "./home.jsx";

const name = "Arjun Ghimire";
const address = "Butwal";

describe("Home Component", () => {
  it(`props name => ${name} && address => ${address} are tested successfully`, () => {
    const wrapper = shallow(<Home name={name} address={address} />);
    expect(wrapper.find(".container h4.name").text()).toBe(name);
    expect(wrapper.find(".container b.address").text()).toBe(address);
  });
});
