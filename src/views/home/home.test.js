import React from "react";
import { shallow } from "enzyme";
import Home from "./home.jsx";

const addSum = (x, y) => x + y;
const items = [
  {
    name: "Arjun"
  },
  {
    name: "Arjun"
  }
];

describe("Home Component", () => {
  it("render a component with its props", () => {
    const wrapper = shallow(<Home items={items} />);
    expect(wrapper.find(".item")).toHaveLength(2);
  });
});
describe("Add Sum", () => {
  it("let add x and y", () => {
    expect(addSum(1, 2)).toBe(3);
  });
});
