import { configureStore } from "@reduxjs/toolkit";
import { searchedIdReducer, searchId } from "./slices/searchedIdSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./apis/productsApi";

const store = configureStore({
  reducer: {
    searchedId: searchedIdReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, searchId };
export { useFetchProductsQuery } from "./apis/productsApi";
