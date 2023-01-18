import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../store";

function useFetchData() {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });

  const { data, error, isFetching } =
    useFetchProductsQuery(query);

  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });

  React.useEffect(() => {
    if (idAndPageParams.id !== "") {
      dispatch(setQuery(`id=${idAndPageParams.id}`));
    } else if (idAndPageParams.page > 0) {
      dispatch(setQuery(`page=${idAndPageParams.page + 1}`));
    } else {
      dispatch(setQuery("page=1"));
    }
  }, [idAndPageParams, dispatch]);

  return [data, error, isFetching];
}

export default useFetchData;
