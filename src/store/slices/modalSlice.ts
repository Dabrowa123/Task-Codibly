import { createSlice } from "@reduxjs/toolkit";

type IsVisibleState = {
  productModal: boolean;
  instructionsModal: boolean;
  technologiesModal: boolean;
};

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
    // isVisible: false,
    isVisible: {
      productModal: false,
      instructionsModal: false,
      technologiesModal: false,
    } as IsVisibleState,
  },
  reducers: {
    setModalData(state, action) {
      state.data = action.payload;
    },
    openModal(state, action) {
      const selectedModal = action.payload;
      state.isVisible[selectedModal as keyof IsVisibleState] = true;
      // state.isVisible = action.payload;
    },
    closeModal(state, action) {
      const selectedModal = action.payload;
      state.isVisible[selectedModal as keyof IsVisibleState] = false;
      // state.isVisible = action.payload;
    },
  },
});

export const { setModalData, openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
