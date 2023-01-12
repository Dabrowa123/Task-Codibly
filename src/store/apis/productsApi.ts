import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Post {
  voidValue: void
}

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<any, void>({
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
