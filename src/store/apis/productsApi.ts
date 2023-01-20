import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PageEndPoint = {
  page: number;
  per_page: number;
  support: { url: string };
  total: number;
  total_pages: number;
  data: Product[];
};

type IdEndPoint = {
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

type IdAndPage = {
  id: string;
  page: number;
};

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchPage: builder.query<PageEndPoint, IdAndPage>({
        query: (idAndPageParams) => {
          return {
            url: `/products?page=${idAndPageParams.page + 1}`,
            method: "GET",
          };
        },
      }),
      fetchId: builder.query<IdEndPoint, IdAndPage>({
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

export type { PageEndPoint, IdEndPoint, Product, Support };
