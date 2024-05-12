import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("rendered correctly", () => {
    render(<Application />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to all terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
