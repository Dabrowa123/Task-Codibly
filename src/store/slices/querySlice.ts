import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: ["page=1"],
  reducers: {
    setQuery(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;
