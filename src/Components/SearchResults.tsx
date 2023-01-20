import CustomizedTable from "./CustomizedTable/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import useGetData from "../hooks/useGetData";

function SearchResults() {
  const { data, error, isFetching } = useGetData();

  return (
    <>
      {error && <ErrorMesages />}

      {data && !error && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
