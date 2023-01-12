import { createSlice } from "@reduxjs/toolkit";

const statefulURLSlice = createSlice({
  name: "statefulURL",
  initialState: [""],
  reducers: {
    addIdToURL(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { addIdToURL } = statefulURLSlice.actions;
export const statefulURLReducer = statefulURLSlice.reducer;
