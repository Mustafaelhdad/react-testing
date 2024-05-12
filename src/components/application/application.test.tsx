import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("rendered correctly", () => {
    render(<Application />);

    const headingElement = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(headingElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
