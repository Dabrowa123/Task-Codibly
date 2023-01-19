import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import BackgroundId from "./BackgroundId";
import BackgroundPage from "./BackgroundPage";

function DynamicBacground() {
  const SearchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  return (
    <>
      {SearchedId !== "" && <BackgroundId />}
      {SearchedId === "" && <BackgroundPage />}
    </>
  );
}

export default DynamicBacground;
