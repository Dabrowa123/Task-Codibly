import { configureStore } from "@reduxjs/toolkit";
import { searchedIdReducer, searchId } from "./slices/searchedIdSlice";

const store = configureStore({
  reducer: {
    searchedId: searchedIdReducer,
  },
});

export { store, searchId };
