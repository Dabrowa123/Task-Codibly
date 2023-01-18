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

  let rows = data || [];

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
