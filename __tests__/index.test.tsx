import { render, screen } from "@testing-library/react-native";
import React from "react";

import Index from "../app/index";

describe("Index screen", () => {
  it("renders the worship song home screen", () => {
    render(<Index />);

    expect(screen.getByText("Sing His Praise")).toBeTruthy();
    expect(screen.getByText("Worship songs")).toBeTruthy();
    expect(screen.getByText("Amazing Grace")).toBeTruthy();
  });
});
