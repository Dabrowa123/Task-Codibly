import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState, useFetchProductsQuery } from "../store";
import { LinearProgress } from "@mui/material";

function TaskInfo() {
  const { isFetching } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return (
    <Stack sx={{ height: 80 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: 2, paddingBottom: 3 }}
      >
        <Button variant="contained" sx={{ width: "48%" }}>
          Instructions
        </Button>
        <Button variant="outlined" sx={{ width: "48%" }}>
          Technologies
        </Button>
      </Stack>
      {isFetching && <LinearProgress color="info" />}
    </Stack>
  );
}

export default TaskInfo;
