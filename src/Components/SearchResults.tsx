import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useFetchData from "../hooks/useFetchData";

function SearchResults() {
  const [isSuccess, isError, isFetching] = useFetchData();

  return (
    <>
      {isError && <ErrorMesages />}

      {isSuccess && !isError && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
