import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "../ProductModal";
import { useDispatch } from "react-redux";
import StyledTableCell from "./StyledTableCell";
import createPaginationLabel from "../../helpers/createPaginationLabel";
import usePagination from "../../hooks/usePagination";
import useIsFiltering from "../../hooks/useIsFiltering";
import { setModalData, openModal } from "../../store";
import { Product } from "../../store/apis/productsApi";
import useGetData from "../../hooks/useGetData";

function CustomizedTable() {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    usePagination();

  const isFiltering = useIsFiltering();

  const dispatch = useDispatch();
  const handleShowModal = (rowData: Product | null) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  const { data } = useGetData();

  const products = data || [];

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
            {products.map((rowData: Product) => (
              <TableRow
                data-testid="tableRow"
                key={rowData?.id * Math.random()}
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
