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
import { useDispatch } from "react-redux";
import { setModalData, openModal } from "../store/index";

function DataTable() {
  const [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
    useDataTable();

  const dispatch = useDispatch();
  const showModal = (rowData: any) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  function defaultLabelDisplayedRows({ from, to }: any) {
    return (
      <div>
        {from}&nbsp;-&nbsp;{to - 1}
      </div>
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
      <TablePagination
        component="div"
        count={12}
        // count={rows.length}
        rowsPerPageOptions={[]}
        rowsPerPage={6}
        // rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // labelDisplayedRows={ from, to, count, page }
        // labelDisplayedRows={ from: 1, to: 5, count: 12, page: 1 }
        // labelDisplayedRows={(page) =>
        //   `${page.from}-${page.to === -1 ? page.count : page.to} از ${
        //     page.count
        //   }`
        // }
        labelDisplayedRows={(page) => defaultLabelDisplayedRows(page)}
      />
    </>
  );
}

export default DataTable;
