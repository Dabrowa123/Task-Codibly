import CustomizedTable from "./Table/CustomizedTable";
import useFetchData from "../hooks/useFetchData";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function SearchResults() {
  const [data, error, isLoading] = useFetchData();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    if ("status" in error) {
      if (error.status === 404) {
        content = (
          <Typography align="center">
            There is no prodct matching requested ID
          </Typography>
        );
      } else {
        content = (
          <Stack>
            <Typography align="center">An error has occurred</Typography>
            <Typography align="center">Status: {error.status}</Typography>
          </Stack>
        );
      }
    }
  } else {
    content = <CustomizedTable />;
  }

  return <>{content}</>;
}

export default SearchResults;
