import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector } from "react-redux";

function SearchResults() {
  const { data, error, isFetching } = useFetchProductsQuery(
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