import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "./ProductModal";
import useDataTable from "../hooks/useDataTable";
import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal, RootState } from "../store/index";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function DataTable() {
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

  function defaultLabelDisplayedRows({ from, to }: any) {
    return (
      <>
        {from}&nbsp;-&nbsp;{to - 1}
      </>
    );
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
      fontWeight: 'bold',
      border: 0
    },
  }));

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
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0, 
                  },
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
          labelDisplayedRows={(page) => defaultLabelDisplayedRows(page)}
        />
      )}
    </>
  );
}

export default DataTable;
