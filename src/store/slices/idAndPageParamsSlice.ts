import { createSlice } from "@reduxjs/toolkit";

const idAndPageParamsSlice = createSlice({
  name: "idAndPageParams",
  initialState: { id: "", page: 0 },
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setId, setPage } = idAndPageParamsSlice.actions;
export const idAndPageParamsReducer = idAndPageParamsSlice.reducer;
