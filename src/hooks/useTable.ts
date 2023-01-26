import * as React from "react";
import {
  setPage,
  RootState,
  useFetchProductsQuery,
  setModalData,
  openModal,
} from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../types/types";

function useTable() {
  const dispatch = useDispatch();

  // pagination control

  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    dispatch(setPage(0));
  };

  // Creating rows data

  const { data } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  let rows = data || [];

  return {
    rows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}

export default useTable;
