import { LabelDisplayedRowsArgs } from "@mui/material/TablePagination";

function createPaginationLabel({ from, to }: LabelDisplayedRowsArgs) {
  return (
    <span data-testid="pagination">
      {from}&nbsp;-&nbsp;{to} of 12
    </span>
  );
}

export default createPaginationLabel;
