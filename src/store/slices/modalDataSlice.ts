import { createSlice } from "@reduxjs/toolkit";

const modalDataSlice = createSlice({
  name: "modalData",
  initialState: [
    {
      id: 0,
      name: "",
      year: 0,
      color: "",
      pantone_value: "",
    },
  ],
  reducers: {
    setModalData(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { setModalData } = modalDataSlice.actions;
export const modalDataReducer = modalDataSlice.reducer;
