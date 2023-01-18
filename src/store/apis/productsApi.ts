import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PageEndPoint = {
  page: number;
  per_page: number;
  support: { url: string };
  total: number;
  total_pages: number;
  data: Product[];
};

type IdEndpoint = {
  data: Product;
  support: Support;
};

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type Support = {
  url: string;
};

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchPage: builder.query<PageEndPoint, any>({
        query: (idAndPageParams) => {
          // set query
          if (idAndPageParams.page > 0) {
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
      }),
      fetchId: builder.query<IdEndpoint, any>({
        query: (idAndPageParams) => {
          return {
            url: `/products?id=${idAndPageParams.id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPageQuery, useFetchIdQuery } = productsApi;
export { productsApi };

export type { PageEndPoint, IdEndpoint, Product, Support };
