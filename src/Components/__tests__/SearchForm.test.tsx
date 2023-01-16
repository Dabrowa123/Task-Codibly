import SearchForm from "../SearchForm";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("SearchForm Component", () => {
  it("input should accept numbers", () => {
    renderWithProviders(<SearchForm />);
    const inputElement = screen.getByLabelText(
      "Filter by ID"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 1 } });
    expect(inputElement.value).toBe("1");
  });

  it("input should not accept letters", () => {
    renderWithProviders(<SearchForm />);
    const inputElement = screen.getByLabelText(
      "Filter by ID"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Some Text" } });
    expect(inputElement.value).toBe("");
  });
});
