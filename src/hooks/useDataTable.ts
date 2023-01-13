import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { addPaginationToURL, setQuery } from "../store";
import useFetchData from "./useFetchData";

function useDataTable() {
  // pagination control

  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    dispatch(setQuery(`page=${newPage + 1}`));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Creating rows data

  const [data, error] = useFetchData();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  let rows: any;

  if (query.match(/id/i)) {
    rows = [data?.data];
  } else {
    rows = data?.data;
  }

  // stateful URL

  // Reflect paggination in URL
  // React.useEffect(() => {
  //   dispatch(addPaginationToURL(page));
  // }, [page]);

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
