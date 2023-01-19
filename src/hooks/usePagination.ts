import * as React from "react";
import {
  setPage,
  RootState,
} from "../store";
import { useSelector, useDispatch } from "react-redux";

function usePagination() {
  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });
  
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  
  const dispatch = useDispatch();
  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    dispatch(setPage(0));
  };

  return [
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  ];
}

export default usePagination;