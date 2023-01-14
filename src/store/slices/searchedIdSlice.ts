import { createSlice } from "@reduxjs/toolkit";

const searchedIdSlice = createSlice({
  name: "searchedId",
  initialState: { id: "" },
  reducers: {
    searchId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { searchId } = searchedIdSlice.actions;
export const searchedIdReducer = searchedIdSlice.reducer;
