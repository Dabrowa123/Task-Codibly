import { configureStore } from "@reduxjs/toolkit";
import {
  idAndPageParamsReducer,
  setId,
  setPage,
} from "./slices/idAndPageParamsSlice";
import {
  modalReducer,
  openModal,
  closeModal,
  setModalData,
} from "./slices/modalSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./apis/productsApi";

const store = configureStore({
  reducer: {
    idAndPageParams: idAndPageParamsReducer,
    modal: modalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  setId,
  setPage,
  setModalData,
  openModal,
  closeModal
};
export { useFetchProductsQuery } from "./apis/productsApi";
export type RootState = ReturnType<typeof store.getState>;




