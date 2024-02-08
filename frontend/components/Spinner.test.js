import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";
// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test("Spinner does not render when off", () => {
  render(<Spinner on={false} />);
  expect(screen.queryByText("Please wait...")).toBeNull();
});

test("Spinner renders 'Please wait...' when on", async () => {
  render(<Spinner on={true} />);
  expect(screen.getByText("Please wait...")).toBeInTheDocument();
});
