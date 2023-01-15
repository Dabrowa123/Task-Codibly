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

  const statefulURL = useSelector((state: RootState) => {
    return state.statefulURL[1];
  });

  const page = useSelector((state: RootState) => {
    return state.page.page;
  });

  React.useEffect(() => {
    if (searchedId !== "") {
      dispatch(setQuery(`id=${searchedId}`));
    } else if (statefulURL === "1" || page === 1) {
      dispatch(setQuery(`page=${2}`));
    } else {
      dispatch(setQuery("page=1"));
    }
    // eslint-disable-next-line
  }, [searchedId, statefulURL, page]);

  return [data, error, isLoading];
}

export default useFetchData;
