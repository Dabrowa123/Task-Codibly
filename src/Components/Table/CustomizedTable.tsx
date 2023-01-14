import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "../ProductModal";
import useDataTable from "../../hooks/useDataTable";
import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal, RootState } from "../../store/index";
import StyledTableCell from "./StyledTableCell";
import createPaginationLabel from "../../helpers/createPaginationLabel";

function CustomizedTable() {
  const [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
    useDataTable();

  const searchedId = useSelector((state: RootState) => {
    return state.searchedId;
  });

  const dispatch = useDispatch();
  const showModal = (rowData: any) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  return (
    <>
      <ProductModal />

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
            {rows.slice(0, 5).map((rowData: any) => (
              <TableRow
                key={rowData?.name}
                style={{
                  backgroundColor: `${rowData?.color}`,
                }}
                onClick={() => showModal(rowData)}
              >
                <StyledTableCell component="th" scope="row">
                  {rowData?.id}
                </StyledTableCell>
                <StyledTableCell align="left">{rowData?.name}</StyledTableCell>
                <StyledTableCell align="right">{rowData?.year}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {searchedId.id === "" && (
        <TablePagination
          component="div"
          count={12}
          rowsPerPageOptions={[]}
          rowsPerPage={6}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={(page) => createPaginationLabel(page)}
        />
      )}
    </>
  );
}

export default CustomizedTable;
