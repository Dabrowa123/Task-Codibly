import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<any, any>({
        query: (idAndPageParams) => {
          console.log(idAndPageParams);
          if (idAndPageParams.id !== "") {
            return {
              url: `/products?id=${idAndPageParams.id}`,
              method: "GET",
            };
          } else if (idAndPageParams.page > 0) {
            return {
              url: `/products?page=${idAndPageParams.page + 1}`,
              method: "GET",
            };
          } else {
            return {
              url: `/products?page=1`,
              method: "GET",
            };
          }
        },
        transformResponse: (response: any, meta, args) => {
          if (args.id !== "") {
            return [response.data];
          } else {
            return response.data;
          }
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
