import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home page", () => {
  test("renders Menu component", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("renders ListOfResults component", () => {
    render(<Home />);
    expect(screen.getByTestId("list-of-results")).toBeInTheDocument();
  });
});