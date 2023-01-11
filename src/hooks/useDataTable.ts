import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

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

  let rowsData = data?.data.map(
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

  const searchedId = useSelector((state: RootState) => {
    return state.searchedId[0];
  });

  let rows;

  // React.useEffect(() => {
  if (searchedId === "") {
    rows = rowsData;
  } else {
    rows = rowsData.filter((row: any) => row.id == searchedId);
  }
  // }, [searchedId]);

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
