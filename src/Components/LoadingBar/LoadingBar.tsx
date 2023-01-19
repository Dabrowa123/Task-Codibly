import LoaderId from "./LoaderId";
import LoaderPage from "./LoaderPage";
import useIsFiltering from "../../hooks/useIsFiltering";

function LoadingBar() {
  const isFiltering = useIsFiltering();

  return (
    <>
      {isFiltering && <LoaderId />}
      {!isFiltering && <LoaderPage />}
    </>
  );
}

export default LoadingBar;
