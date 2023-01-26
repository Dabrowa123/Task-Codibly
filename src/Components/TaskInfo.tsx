import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useModal from "../hooks/useModal";
import InstructionsModal from "./Modals/InstructionsModal";
import TechnologiesModal from "./Modals/TechnologiesModal";
import { useSelector } from "react-redux";
import { RootState, useFetchProductsQuery } from "../store";
import { LinearProgress } from "@mui/material";

function TaskInfo() {
  const { isFetching } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const { handleShowModal } = useModal();

  return (
    <Stack sx={{ minHeight: 80 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: 2, paddingBottom: 3 }}
      >
        <Button
          variant="contained"
          sx={{ width: "48%" }}
          onClick={() => handleShowModal("instructionsModal")}
        >
          Instructions
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "48%" }}
          onClick={() => handleShowModal("technologiesModal")}
        >
          Technologies
        </Button>
      </Stack>

      {isFetching && <LinearProgress color="info" />}

      <InstructionsModal />
      <TechnologiesModal />
    </Stack>
  );
}

export default TaskInfo;
