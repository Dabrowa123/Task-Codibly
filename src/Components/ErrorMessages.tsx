import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Fade from "@mui/material/Fade";

function ErrorMesages() {
  // eslint-disable-next-line
  const [data, error] = useFetchData();

  const searchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  return (
    <Fade>
      <>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 3, padding: 5, height: 270 }}
        >
          <Typography align="center" variant="subtitle1" gutterBottom>
            {error.status === 404 && (
              <>
                There is no prodct with ID
                <Typography variant="h6">{searchedId}</Typography>
                in the database
              </>
            )}
            {error.status !== 404 && <>An error has occurred</>}
          </Typography>
          <br />
          <Typography align="center" variant="subtitle2" gutterBottom>
            Status: {error.status}
          </Typography>
        </Stack>
      </>
    </Fade>
  );
}

export default ErrorMesages;
