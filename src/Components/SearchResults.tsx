import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useFetchData from "../hooks/useFetchData";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Fade } from "react-awesome-reveal";

function SearchResults() {
  const [data, error, isFetching, isLoading] = useFetchData();

  return (
    <>
      {(isLoading || isFetching) && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

      {error && <ErrorMesages />}

      {data && !error && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
