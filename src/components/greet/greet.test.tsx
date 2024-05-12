import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet name="" />);
    const textElemeent = screen.getByText("Hello");
    expect(textElemeent).toBeInTheDocument();
  });

  describe("nested", () => {
    test("Greet renders with name", () => {
      render(<Greet name="Mustafa" />);
      const textElemeent = screen.getByText("Hello Mustafa");
      expect(textElemeent).toBeInTheDocument();
    });
  });
});
