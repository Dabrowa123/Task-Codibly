import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

function useFetchData() {
  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });
  const { data, error, isFetching } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return [data, error, isFetching];
}

export default useFetchData;
