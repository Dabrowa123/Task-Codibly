import * as React from "react";
import { setPage, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import useFetchData from "./useFetchData";

function useDataTable() {
  // pagination control

  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });

  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    dispatch(setPage(0));
  };

  // Creating rows data

  const [data] = useFetchData();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  let rows: any;

  console.log(typeof data);
  if (query.match(/id/i)) {
    rows = [data?.data] || [];
  } else {
    rows = data?.data || [];
  }

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
