import { setModalData, openModal } from "../store";
import { useDispatch } from "react-redux";
import { Product } from "../types/types";

function useTable() {
  const dispatch = useDispatch();

  const handleShowModal = (modal: string, product?: Product) => {
    if (product) {
      dispatch(setModalData(product));
    }
    dispatch(openModal(modal));
  };

  return {
    handleShowModal,
  };
}

export default useTable;
