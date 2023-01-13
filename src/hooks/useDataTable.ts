import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { addPaginationToURL, setQuery } from "../store";

function useDataTable() {
  // Query control
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  // const [query, setQuery] = React.useState("page=1");

  const { data } = useFetchProductsQuery(query);

  const searchedId = useSelector((state: RootState) => {
    return state.searchedId[0];
  });

  React.useEffect(() => {
    if (searchedId !== "") {
      dispatch(setQuery(`id=${searchedId}`));
    } else {
      dispatch(setQuery("page=1"));
    }
  }, [searchedId]);

  // pagination control

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

  function createData(
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
  ) {
    return { id, name, year, color, pantone_value };
  }

  let rowsData: any;

  if (query.match(/id/i)) {
    rowsData = [data?.data];
  } else {
    rowsData = data?.data;
  }

  let rows = rowsData.map(
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

  // stateful URL

  // Reflect paggination in URL
  // React.useEffect(() => {
  //   dispatch(addPaginationToURL(page));
  // }, [page]);

  return [rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}

export default useDataTable;
