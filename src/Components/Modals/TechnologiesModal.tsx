import { useSelector, useDispatch } from "react-redux";
import { RootState, closeModal } from "../../store/index";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import StyledModalBox from "./StyledModalBox";
import CloseIcon from "@mui/icons-material/Close";

export default function TechnologiesModal() {
  const open = useSelector((state: RootState) => {
    return state.modal.isVisible.technologiesModal;
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal("technologiesModal"));

  return (
    <div>
      <Modal
        data-testid="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <StyledModalBox
          sx={{ width: 220, "@media (min-width: 500px)": { width: 300 } }}
        >
          <Stack direction="row" spacing={2}></Stack>
          <Typography variant="h6" sx={{ mt: 5 }}>
            Technologies used:
          </Typography>
          <Typography sx={{ mt: 5 }}>
            - Typescript as a script language
            <br />
            - Redux Toolkit for state management
            <br />
            - Redux Toolkit Queries to fetch data
            <br />
            - Material UI with customization for styling
            <br />
            - Server side filtering and pagination
            <br />
            - React Testing Library and Jest for testing
            <br />
            - Ahooks & react router to establish stateful URL
            <br />- React-awesome-reveal for trasitions
          </Typography>
          <Typography sx={{ mt: 5 }}>
            Application is fully responsive and works on all devces.
          </Typography>

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
