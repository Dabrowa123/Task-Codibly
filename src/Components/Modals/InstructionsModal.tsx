import { useSelector, useDispatch } from "react-redux";
import { RootState, closeModal } from "../../store/index";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StyledModalBox from "./StyledModalBox";
import CloseIcon from "@mui/icons-material/Close";

export default function InstructionsModal() {
  const open = useSelector((state: RootState) => {
    return state.modal.isVisible.instructionsModal;
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal("instructionsModal"));

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
          sx={{ width: "90%", top: 0, transform: "translate(-50%, 0%)" }}
        >
          <Stack direction="row" spacing={2}></Stack>
          <Typography sx={{ mt: 5 }}>Task description:</Typography>
          <Typography sx={{ mt: 5 }}>
            The goal of the task is to implement SPA application with just one
            view. You should use the below API endpoint to display the paginated
            list of products. At the top of the view, there should be text
            input, which allows the user to filter results by id. The input
            should accept only numbers, other signs should not even appear.
            Below this input user should see a table displaying the following
            items properties: id, name, and year. Additionally, the background
            colour of each row should be taken from the colour property. After
            clicking on a row a modal should be displayed and should present all
            item data. The table should display 5 items per page. Under the
            table, there should be a pagination component, which allows
            switching between pages with “next” and “previous” arrows.
          </Typography>
          <Typography sx={{ mt: 5 }}>
            Please remember about handling situations when API endpoint returns
            a 4XX or 5XX error. In such a case the user should be informed about
            the error.
          </Typography>{" "}
          <Typography sx={{ mt: 5 }}>
            Apart from React, the technology stack totally ups to you, the same
            applies to styling. As a result of the task, we expect a link to a
            repository on GitHub, GitLab, or bitbucket. Your app should start
            after running npm install & npm start.
          </Typography>{" "}
          <Typography sx={{ mt: 5 }}>
            Extra requirement (optional): Please reflect pagination and
            filtering in the address URL, so users can copy and share the URL
            with each other.{" "}
          </Typography>
          <Typography sx={{ mt: 5 }}>
            API endpoint: https://reqres.in/api/products
          </Typography>{" "}
          <Typography sx={{ mt: 5 }}>
            Requirements: React Typescript git github/gitlab/bitbucket
          </Typography>{" "}
          <Typography sx={{ mt: 5 }}>
            Nice to have: Unit tests Redux/Context API or other state management
            library
          </Typography>
          <Typography sx={{ mt: 5 }}>
            {" "}
            Remarks: - filtering and pagination should be performed within the
            API, not on the frontend side - take into account that API returns
            12 items in total - after changing the page it should be possible to
            copy-paste web browser URL to another tab, where this exact page
            should be displayed on the start
          </Typography>{" "}
          <Typography sx={{ mt: 5 }}>
            Tips: per_page field lets you set the number of items per page page
            field lets you set the page number of results id field lets you
            filter results by id Proposed styling library(contains also icons):
            https://mui.com/
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
