import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { idAndPageParamsReducer } from "../store/slices/idAndPageParamsSlice";
import { modalReducer } from "../store/slices/modalSlice";
import { queryReducer } from "../store/slices/querySlice";
import { productsApi } from "../store/apis/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        idAndPageParams: idAndPageParamsReducer,
        query: queryReducer,
        modal: modalReducer,
        [productsApi.reducerPath]: productsApi.reducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    setupListeners(store.dispatch);
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
