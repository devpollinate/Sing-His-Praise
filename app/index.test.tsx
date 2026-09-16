import { render, screen } from "@testing-library/react-native";
import React from "react";
import Index from "./index";

describe("Index screen", () => {
  it("renders the welcome text", () => {
    render(<Index />);

    expect(
      screen.getByText("Edit app/index.tsx to edit this screen."),
    ).toBeTruthy();
    expect(screen.getByText("Hello, World.")).toBeTruthy();
  });
});
