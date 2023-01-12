import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnyARecord } from "dns";
interface Post {
  voidValue: void;
}

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<any, any>({
        query: (querry) => {
          return {
            // url: "/products",
            // url: "/products?id=1",
            url: `/products?${querry}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
// const productsApi = createApi({
//   reducerPath: "products",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://reqres.in/api",
//   }),
//   endpoints(builder) {
//     return {
//       fetchProductsPage: builder.query<any, void>({
//         query: (page) => {
//           return {
//             // url: "/products",
//             // url: "/products?id=1",
//             url: `/products?page=${page}`,
//             method: "GET",
//           };
//         },
//       }),
//       fetchProductById: builder.query<any, void>({
//         query: (id) => {
//           return {
//             // url: "/products",
//             url: `/products?id=${id}`,
//             // url: "/products?page=1",
//             method: "GET",
//           };
//         },
//       }),
//     };
//   },
// });

// // export const { useFetchProductsQuery } = productsApi;
// export const { useFetchProductsPageQuery, useFetchProductByIdQuery } = productsApi;
// export { productsApi };
