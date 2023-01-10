import { createSlice } from "@reduxjs/toolkit";

const searchedIdSlice = createSlice({
  name: "searchedId",
  initialState: [""],
  reducers: {
    searchId(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { searchId } = searchedIdSlice.actions;
export const searchedIdReducer = searchedIdSlice.reducer;
