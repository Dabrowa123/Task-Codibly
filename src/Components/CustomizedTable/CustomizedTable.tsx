import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "../ProductModal/ProductModal";
import useDataTable from "../../hooks/useTable";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setPage } from "../../store/index";
import StyledTableCell from "./StyledTableCell";
import createPaginationLabel from "../../helpers/createPaginationLabel";
import SearchedPageTableBody from "./SearchdPageTableBody";
import SearchedIdTableBody from "./SearchedIdTableBody";

function CustomizedTable() {
  // const [
  //   rows,
  //   page,
  //   rowsPerPage,
  //   handleChangePage,
  //   handleChangeRowsPerPage,
  //   handleShowModal,
  // ] = useDataTable();

  const searchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  // pagination control
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });

  const [rowsPerPage, setRowsPerPage] = React.useState(6);

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
          {searchedId !== "" && <SearchedIdTableBody />}
          {searchedId === "" && <SearchedPageTableBody />}

          {/* <TableBody>
            {rows.slice(0, 5).map((rowData: any) => (
              <TableRow
                data-testid="tableRow"
                key={rowData?.name}
                sx={{
                  backgroundColor: `${rowData?.color}`,
                }}
                onClick={() => handleShowModal(rowData)}
              >
                <StyledTableCell width="5%">{rowData?.id}</StyledTableCell>
                <StyledTableCell width="70%" align="left">
                  {rowData?.name}
                </StyledTableCell>
                <StyledTableCell width="25%" align="right">
                  {rowData?.year}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>

      {searchedId === "" && 
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
      }

      <ProductModal />
    </>
  );
}

export default CustomizedTable;
