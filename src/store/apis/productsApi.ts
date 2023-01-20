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

export type Product = {
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
      fetchProducts: builder.query<Product[], any>({
        query: (idAndPageParams) => {
          // set query
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
        transformResponse: async (
          response: PageEndPoint | IdEndPoint,
          meta,
          args
        ) => {
          // response data normalization to type Product[]
          if (args.id !== "") {
            return [((await response) as IdEndPoint).data];
          } else {
            return ((await response) as PageEndPoint).data;
          }
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
