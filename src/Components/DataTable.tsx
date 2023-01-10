import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid/index.js";
import { useFetchProductsQuery } from "../store";
import { productsApi } from "../store/apis/productsApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable() {
  const { data, error, isLoading } = useFetchProductsQuery();
  function createData(id: number, name: string, year: number, color: string) {
    return { id, name, year, color };
  }

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    let rows = data?.data.map(
      ({
        id,
        name,
        year,
        color,
      }: {
        id: number;
        name: string;
        year: number;
        color: string;
      }) => createData(id, name, year, color)
    );
    // let products = data?.data;
    // let rows = products;
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 7 },
      { field: "name", headerName: "Name", width: 130 },
      {
        field: "year",
        headerName: "Year",
        type: "number",
        width: 90,
      },
    ];
    content = (
      // <div style={{ height: 400, width: "100%" }}>
      //   <DataGrid
      //     rows={rows}
      //     columns={columns}
      //     pageSize={5}
      //     rowsPerPageOptions={[5]}
      //   />
      // </div>
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
            {rows.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return <>{content}</>;
}
