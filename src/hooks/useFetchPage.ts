import { useSelector } from "react-redux";
import { useFetchPageQuery, RootState } from "../store";
import { Product } from "../store/apis/productsApi";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

function useFetchPage(): [
  Product[],
  FetchBaseQueryError | SerializedError | undefined,
  boolean
] {
  const { data, error, isFetching } = useFetchPageQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  // normalization of fetching results
  const products = data?.data.slice(0, 5) || [];

  return [products, error, isFetching];
}

export default useFetchPage;
