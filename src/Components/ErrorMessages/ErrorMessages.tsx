import ErrorId from "./ErrorId";
import ErrorPage from "./ErrorPage";
import useIsFiltering from "../../hooks/useIsFiltering";

function ErrorMesages() {
  const isFiltering = useIsFiltering();

  return (
    <>
      {isFiltering && <ErrorId />}
      {!isFiltering && <ErrorPage />}
    </>
  );
}

export default ErrorMesages;
