import CustomizedTable from "../CustomizedTable/CustomizedTable";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("ProductModal Component", () => {
  it("should render product data on modal after clicking a row", async () => {
    renderWithProviders(<CustomizedTable />);
    expect(await screen.findByText("1")).toBeInTheDocument();

    const tableRow = screen.getByText("1") as unknown as Element;
    fireEvent.click(tableRow);
    const modal = screen.getByTestId("modal") as unknown as Element;
    expect(await screen.findByText("CERULEAN")).toBeInTheDocument();
  });
});
