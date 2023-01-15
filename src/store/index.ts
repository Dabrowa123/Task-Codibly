import { configureStore } from "@reduxjs/toolkit";
// import { searchedIdReducer, searchId } from "./slices/searchedIdSlice";
// import { pageReducer, setPage } from "./slices/pageSlice";
import { idAndPageParamsReducer, setId, setPage } from "./slices/idAndPageParamsSlice";
// import {
//   statefulURLReducer,
//   addIdToURL,
//   addPaginationToURL,
// } from "./slices/statefulURLSlice";
import { modalDataReducer, setModalData } from "./slices/modalDataSlice";
import { queryReducer, setQuery } from "./slices/querySlice";
import {
  isModalVisibleReducer,
  openModal,
  closeModal,
} from "./slices/isModalVisibleSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./apis/productsApi";

const store = configureStore({
  reducer: {
    idAndPageParams: idAndPageParamsReducer,
    query: queryReducer,
    modalData: modalDataReducer,
    isModalVisible: isModalVisibleReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  // searchId,
  setId,
  setPage,
  setQuery,
  // addIdToURL,
  // addPaginationToURL,
  setModalData,
  openModal,
  closeModal,
};
export { useFetchProductsQuery } from "./apis/productsApi";
export type RootState = ReturnType<typeof store.getState>;
