import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useFetchData from "../hooks/useFetchData";
import Typography from "@mui/material/Typography";

function SearchResults() {
  const [data, error, isFetching, isLoading] = useFetchData();

  return (
    <>
      {(isLoading || isFetching) && (
        <Typography align="center">Loading...</Typography>
      )}

      {error && <ErrorMesages />}

      {data && !error && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
