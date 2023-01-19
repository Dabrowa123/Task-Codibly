import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "../ProductModal/ProductModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setPage } from "../../store/index";
import StyledTableCell from "./StyledTableCell";
import createPaginationLabel from "../../helpers/createPaginationLabel";
import SearchedPageTableBody from "./SearchdPageTableBody";
import SearchedIdTableBody from "./SearchedIdTableBody";
import usePagination from "../../hooks/usePagination";
import useIsFiltering from "../../hooks/useIsFiltering";

function CustomizedTable() {
  // const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
  //   usePagination();
  // const [, , handleChangePage] = usePagination();

  const isFiltering = useIsFiltering();

  // pagination control

  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });

  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const dispatch = useDispatch();
  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    dispatch(setPage(0));
  };

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="right">Year</StyledTableCell>
            </TableRow>
          </TableHead>

          {isFiltering && <SearchedIdTableBody />}
          {!isFiltering && <SearchedPageTableBody />}
        </Table>
      </TableContainer>

      {!isFiltering && (
        <TablePagination
          component="div"
          count={12}
          rowsPerPageOptions={[]}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={(page) => createPaginationLabel(page)}
        />
      )}

      <ProductModal />
    </>
  );
}

export default CustomizedTable;
