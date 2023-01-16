import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useFetchData from "../hooks/useFetchData";
import Typography from "@mui/material/Typography";

function SearchResults() {
  const [data, error, isLoading] = useFetchData();

  return (
    <>
      {isLoading && <Typography align="center">Loading...</Typography>}

      {error && <ErrorMesages />}

      {data && !error && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
