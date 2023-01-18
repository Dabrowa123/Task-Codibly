import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useFetchData from "../hooks/useFetchData";

function SearchResults() {
  const [Data, Error, isFetching] = useFetchData();

  return (
    <>
      {Error && <ErrorMesages />}

      {Data && !Error && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
