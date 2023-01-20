import * as React from "react";
import useFetchId from "./useFetchId";
import useFetchPage from "./useFetchPage";
import useIsFiltering from "./useIsFiltering";
import { Product } from "../store/apis/productsApi";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

function useGetData() {
  const [idData, idError, isIdFetching] = useFetchId();
  const [pageData, pageError, isPageFetching] = useFetchPage();

  const [data, setData] = React.useState<Product[]>();
  const [error, setError] = React.useState<
    FetchBaseQueryError | SerializedError | undefined
  >();
  const [isFetching, setIsFetching] = React.useState<boolean>();

  const isFiltering = useIsFiltering();

  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });

  React.useEffect(() => {
    if (isFiltering) {
      setData(idData);
      setError(idError);
      setIsFetching(isIdFetching);
    } else {
      setData(pageData);
      setError(pageError);
      setIsFetching(isPageFetching);
    }
  }, [idAndPageParams]);
  // console.log(SearchedId);
  // console.log(data);
  return { data, error, isFetching };
}

export default useGetData;
