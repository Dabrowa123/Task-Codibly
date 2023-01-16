import App from "../../App";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import "../../utils/__mocks__/intersectionObserverMock";

describe("ErrorMessages Component", () => {
  it("error status should be visible when no id found", async () => {
    renderWithProviders(<App />);
    const inputElement = screen.getByLabelText(
      "Filter by ID"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 13 } });
    expect(await screen.findByText("Status: 404")).toBeInTheDocument();
  });
});
