import CustomizedTable from "../CustomizedTable/CustomizedTable";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("CustomizedTable Component", () => {
  it("should change pagination label to 6 - 10 of 12 after first click on pagination button", () => {
    renderWithProviders(<CustomizedTable />);
    const paginationLabel = screen.getByTestId("pagination");
    const nextPageButton = screen.getByTitle(
      "Go to next page"
    ) as unknown as Element;
    fireEvent.click(nextPageButton);
    expect(paginationLabel).toHaveTextContent("6 - 10 of 12");
  });

  it("should open modal after clicking a row", async () => {
    renderWithProviders(<CustomizedTable />);
    expect(await screen.findByText("1")).toBeInTheDocument();

    const tableRow = screen.getByText("1") as unknown as Element;
    fireEvent.click(tableRow);
    const modal = screen.getByTestId("modal") as unknown as Element;
    expect(modal).toBeVisible();
  });
});
