import * as React from "react";
import { useFetchProductsQuery } from "../store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

function useDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { data } = useFetchProductsQuery();
  function createData(id: number, name: string, year: number, color: string) {
    return { id, name, year, color };
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
