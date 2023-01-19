import { useSelector } from "react-redux";
import { useFetchIdQuery, RootState } from "../../store";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";

function ErrorId() {
  const { error } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return (
    <Fade>
      <>
        {error && "status" in error && (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 3, padding: 5, height: 270 }}
          >
            <Typography align="center" variant="subtitle1" gutterBottom>
              An error has occurred
            </Typography>

            <br />

            <Typography align="center" variant="subtitle2" gutterBottom>
              Status: {error.status}
            </Typography>
          </Stack>
        )}
      </>
    </Fade>
  );
}

export default ErrorId;
