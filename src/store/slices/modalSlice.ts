import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: {
      id: 0,
      name: "",
      year: 0,
      color: "",
      pantone_value: "",
    },
    isVisible: false,
    },
  reducers: {
    setModalData(state, action) {
      state.data = action.payload;
    },
    openModal(state, action) {
      state.isVisible = action.payload;
    },
    closeModal(state, action) {
      state.isVisible = !action.payload;
    },
  },
});

export const { setModalData, openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

