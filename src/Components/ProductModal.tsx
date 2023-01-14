import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState, closeModal } from "../store/index";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal() {
  const { id, name, year, color, pantone_value } = useSelector(
    (state: RootState) => {
      return state.modalData[0];
    }
  );
  const open = useSelector((state: RootState) => {
    return state.isModalVisible[0];
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal(true));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product name: {name}
          </Typography>
          <Typography sx={{ mt: 2 }}>Product ID: {id}</Typography>
          <Typography sx={{ mt: 2 }}>Product year: {year}</Typography>
          <Typography sx={{ mt: 2 }}>Product color: {color}</Typography>
          <Typography sx={{ mt: 2 }}>
            Product pantone_value: {pantone_value}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
