import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import LoaderId from "./LoaderId";
import LoaderPage from "./LoaderPage";

function LoadingBar() {
  const SearchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  return (
    <>
      {SearchedId !== "" && <LoaderId />}
      {SearchedId === "" && <LoaderPage />}
    </>
  );
}

export default LoadingBar;
