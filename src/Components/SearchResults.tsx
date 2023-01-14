import CustomizedTable from "./Table/CustomizedTable";
import useFetchData from "../hooks/useFetchData";

function SearchResults() {
  const [data, error, isLoading] = useFetchData();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    if ("status" in error) {
      if (error.status === 404) {
        content = <div>There is no prodct matching requested ID</div>;
      } else {
        content = (
          <div>
            <div>An error has occurred</div>
            <div>Status: {error.status}</div>
          </div>
        );
      }
    }
  } else {
    content = <CustomizedTable />;
  }

  return <>{content}</>;
}

export default SearchResults;
