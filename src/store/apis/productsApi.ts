import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<any, string>({
        query: (querry) => {
          return {
            url: `/products?${querry}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } =  productsApi;
export { productsApi };
