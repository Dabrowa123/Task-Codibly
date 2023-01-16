import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function ErrorMesages() {
  const [data, error, isLoading] = useFetchData();

  const searchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  return (
    <Stack>
      <br />
      <Typography align="center" variant="subtitle1" gutterBottom>
        {error.status === 404 && (
          <>There is no prodct with ID {searchedId} in the database</>
        )}
        {error.status !== 404 && <>An error has occurred</>}
      </Typography>
      <br />
      <Typography align="center" variant="subtitle2" gutterBottom>Status: {error.status}</Typography>
    </Stack>
  );
}

export default ErrorMesages;
