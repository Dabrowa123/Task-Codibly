import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

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
      fetchProducts: builder.query<Product[], IdAndPage>({
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
              url: `/products?page=${idAndPageParams.page + 1}`,
              method: "GET",
            };
          };
        },
        transformResponse: async (
          response: PageEndPoint | IdEndPoint,
          meta,
          args
        ) => {
          // response data normalization to type Product[]
          if (args.id !== "") {
            // if user is filtering: return array with one product
            return [((await response) as IdEndPoint).data];
          } else {
            // if is not filtering: return array with 5 products from page
            return ((await response) as PageEndPoint).data.slice(0, 5);
          }
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
