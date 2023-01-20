import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "../ProductModal";
import useTable from "../../hooks/useTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import StyledTableCell from "./StyledTableCell";
import createPaginationLabel from "../../helpers/createPaginationLabel";

function CustomizedTable() {
  const {
    rows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleShowModal,
  } = useTable();

  const isFiltering = useSelector((state: RootState) => {
    return state.idAndPageParams.id === "" ? true : false;
  });

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
          <TableBody>
            {rows.map((rowData) => (
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
          </TableBody>
        </Table>
      </TableContainer>

      {isFiltering && (
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
