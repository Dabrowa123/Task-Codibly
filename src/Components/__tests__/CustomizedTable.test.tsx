import CustomizedTable from "../Table/CustomizedTable";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("CustomizedTable Component", () => {
  it("modal should be visible after clicking on a table row", () => {
    renderWithProviders(<CustomizedTable />);
    const paginationLabel = screen.getByRole("pagination");
    const nextPageButton = screen.getByTitle(
      "Go to next page"
    ) as unknown as Element;
    screen.debug();
    fireEvent.click(nextPageButton);
    expect(paginationLabel).toHaveTextContent("7 - 11 of 12");
  });
});
