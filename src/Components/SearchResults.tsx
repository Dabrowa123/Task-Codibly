import CustomizedTable from "./Table/CustomizedTable";
import ErrorMesages from "./ErrorMessages";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector } from "react-redux";

function SearchResults() {
  const { isSuccess, isError, isFetching } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return (
    <>
      {isError && <ErrorMesages />}

      {isSuccess && !isError && !isFetching && <CustomizedTable />}
    </>
  );
}

export default SearchResults;
