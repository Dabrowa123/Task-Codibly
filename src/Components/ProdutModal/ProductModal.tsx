import { useSelector, useDispatch } from "react-redux";
import { RootState, closeModal } from "../../store/index";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StyledModalBox from "./StyledModalBox";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductModal() {
  const { id, name, year, color, pantone_value } = useSelector(
    (state: RootState) => {
      return state.modal.data;
    }
  );
  const open = useSelector((state: RootState) => {
    return state.modal.isVisible;
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal(true));

  return (
    <div>
      <Modal
        data-testid="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
            <Stack direction="row" spacing={2}>
              <Stack justifyContent="center">
                <Box
                  sx={{ width: 28, height: 28, backgroundColor: `${color}` }}
                ></Box>
              </Stack>

              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name.toUpperCase()}
              </Typography>
            </Stack>

          <Typography sx={{ mt: 5 }}>ID: {id}</Typography>
          <Typography sx={{ mt: 2 }}>Year: {year}</Typography>
          <Typography sx={{ mt: 2 }}>Color: {color}</Typography>
          <Typography sx={{ mt: 2 }}>Pantone_value: {pantone_value}</Typography>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 42,
              right: 40,
            }}
          />
        </StyledModalBox>
      </Modal>
    </div>
  );
}
