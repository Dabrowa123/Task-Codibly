import React from "react";
import SearchForm from "../SearchForm";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("ProductModal Component", () => {
  it("should accept numbers", () => {
    renderWithProviders(<SearchForm />);
    const inputElement = screen.getByLabelText("Filter by ID");
    fireEvent.change(inputElement, { target: { value: 1 } });
    expect(inputElement.value).toBe("1");
  });

  it("should not accept letters", () => {
    renderWithProviders(<SearchForm />);
    const inputElement = screen.getByLabelText("Filter by ID");
    fireEvent.change(inputElement, { target: { value: "Some Text" } });
    expect(inputElement.value).toBe("");
  });
});
