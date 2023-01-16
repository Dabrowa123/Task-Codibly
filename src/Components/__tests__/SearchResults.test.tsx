import App from "../../App";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import '../__mocks__/intersectionObserverMock';

describe("SearchResults Component", () => {
  it("should render table when receive proper value id", async () => {
    renderWithProviders(<App />);
    const inputElement = screen.getByLabelText(
      "Filter by ID"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 1 } });
    expect(await screen.findByText("cerulean")).toBeInTheDocument();
  });
});
