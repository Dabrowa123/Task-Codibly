import CustomizedTable from "./CustomizedTable/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import { RootState, useFetchIdQuery } from "../store";
import { useSelector } from "react-redux";
import useFetchData from "../hooks/useFetchData";

function SearchResults() {
  const { data, error, isFetching } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return (
    <>
      {error && <ErrorMesages />}

      {data && !error && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
