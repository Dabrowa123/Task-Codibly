import { createSlice } from "@reduxjs/toolkit";

const isModalVisibleSlice = createSlice({
  name: "isModalVisible",
  initialState: [false],
  reducers: {
    openModal(state, action) {
      state[0] = action.payload;
    },
    closeModal(state, action) {
      state[0] = !action.payload;
    },
  },
});

export const { openModal, closeModal } = isModalVisibleSlice.actions;
export const isModalVisibleReducer = isModalVisibleSlice.reducer;
