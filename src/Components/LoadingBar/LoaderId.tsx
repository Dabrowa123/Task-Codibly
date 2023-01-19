import { useSelector } from "react-redux";
import { useFetchIdQuery, RootState } from "../../store";
import LinearProgress from "@mui/material/LinearProgress";

function LoaderId() {
  const { isFetching } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  return <>{isFetching && <LinearProgress />}</>;
}

export default LoaderId;
