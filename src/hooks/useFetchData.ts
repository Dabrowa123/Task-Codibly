import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../store";

function useFetchData() {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  const { data, error, isLoading } = useFetchProductsQuery(query);

  const searchedId = useSelector((state: RootState) => {
    return state.searchedId.id;
  });

  React.useEffect(() => {
    if (searchedId !== "") {
      dispatch(setQuery(`id=${searchedId}`));
    } else {
      dispatch(setQuery("page=1"));
    }
    // eslint-disable-next-line
  }, [searchedId]);

  const page = useSelector((state: RootState) => {
    return state.page.page;
  });

  React.useEffect(() => {
    dispatch(setQuery(`page=${page + 1}`));
    // eslint-disable-next-line
  }, [page]);

  return [data, error, isLoading];
}

export default useFetchData;
