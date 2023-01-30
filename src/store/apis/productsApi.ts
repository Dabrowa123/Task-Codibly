import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ProductsInfo,
  IdAndPage,
  PageEndPoint,
  IdEndPoint,
} from "../../types/types";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<ProductsInfo, IdAndPage>({
        query: (idAndPageParams) => {
          // set query when user is filtering by id
          if (idAndPageParams.id !== "") {
            return {
              url: `/products?id=${idAndPageParams.id}`,
              method: "GET",
            };
            // set query when user is not filtering
          } else {
            return {
              url: `/products?per_page=5&page=${idAndPageParams.page + 1}`,
              method: "GET",
            };
          }
        },
        transformResponse: (
          response: PageEndPoint | IdEndPoint,
          meta,
          args
        ) => {
          // response data normalization to type Product[]
          if (args.id !== "") {
            // if user is filtering: return array with one product & total products number null
            return {
              totalProducts: null,
              products: [(response as IdEndPoint).data],
            };
          } else {
            // if is not filtering: return array with 5 products from page & total products number
            return {
              totalProducts: (response as PageEndPoint).total,
              products: (response as PageEndPoint).data,
            };
          }
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
