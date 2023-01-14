import * as React from "react";
import { addPaginationToURL, setPage, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../store";
import useFetchData from "./useFetchData";

function useDataTable() {
  // pagination control

  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => {
    return state.page.page;
  });
  // const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    // setPage(newPage);
    dispatch(setPage(newPage));
    dispatch(setQuery(`page=${newPage + 1}`));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    // setPage(0);
    dispatch(setPage(0));
  };

  // Reflect paggination in URL

  React.useEffect(() => {
    dispatch(addPaginationToURL(page));
    // eslint-disable-next-line
  }, [page]);

  // Creating rows data

  const [data] = useFetchData();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  let rows: any;

  if (query.match(/id/i)) {
    rows = [data?.data];
  } else {
    rows = data?.data;
  }

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
