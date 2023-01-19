import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ErrorId from "./ErrorId";
import ErrorPage from "./ErrorPage";

function ErrorMesages() {

  const searchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  return (
    <>
      {searchedId !== "" && <ErrorId />}
      {searchedId === "" && <ErrorPage />}
    </>
  );
}

export default ErrorMesages;
