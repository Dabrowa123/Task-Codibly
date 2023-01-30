import CustomizedTable from "../CustomizedTable/CustomizedTable";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("CustomizedTable Component", () => {
  it("should open modal after clicking a row", async () => {
    renderWithProviders(<CustomizedTable />);
    expect(await screen.findByText("1")).toBeInTheDocument();

    const tableRow = screen.getByText("1") as unknown as Element;
    fireEvent.click(tableRow);
    const modal = screen.getByTestId("modal") as unknown as Element;
    expect(modal).toBeVisible();
  });
});
