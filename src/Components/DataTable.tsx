import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ProductModal from "./ProductModal";
import useDataTable from "../hooks/useDataTable";
import { useDispatch, useSelector } from "react-redux";
import { setModalData, openModal, RootState } from "../store/index";

function DataTable() {
  const [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
    useDataTable();
  console.log(rows);
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
  return (
    <>
      <ProductModal />;
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(0, 5)
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rowData: any) => (
                <TableRow
                  key={rowData.name}
                  style={{
                    backgroundColor: `${rowData.color}`,
                  }}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                  onClick={() => showModal(rowData)}
                >
                  <TableCell component="th" scope="row">
                    {rowData.id}
                  </TableCell>
                  <TableCell align="right">{rowData.name}</TableCell>
                  <TableCell align="right">{rowData.year}</TableCell>
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
