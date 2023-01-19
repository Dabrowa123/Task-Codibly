import { useSelector } from "react-redux";
import { useFetchPageQuery, RootState } from "../../store";
import LinearProgress from "@mui/material/LinearProgress";

function LoaderPage() {
  const { isFetching } = useFetchPageQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return <>{isFetching && <LinearProgress />}</>;
}

export default LoaderPage;
