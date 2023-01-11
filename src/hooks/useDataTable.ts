import * as React from "react";
import { useFetchProductsQuery } from "../store";

function useDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { data } = useFetchProductsQuery();
  function createData(
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
  ) {
    return { id, name, year, color, pantone_value };
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
      pantone_value,
    }: {
      id: number;
      name: string;
      year: number;
      color: string;
      pantone_value: string;
    }) => createData(id, name, year, color, pantone_value)
  );

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
