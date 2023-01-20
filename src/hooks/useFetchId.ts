import { useSelector } from "react-redux";
import { useFetchIdQuery, RootState } from "../store";
import { SerializedError } from "@reduxjs/toolkit";
import { Product } from "../store/apis/productsApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

function useFetchId(): [
  Product[],
  FetchBaseQueryError | SerializedError | undefined,
  boolean
] {
  const { data, error, isFetching } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  let products: Product[] = [];

  if (data) {
    if ("data" in data) {
      products = [data.data];
    }
  }

  return [products, error, isFetching];
}

export default useFetchId;
