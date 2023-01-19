import BackgroundId from "./BackgroundId";
import BackgroundPage from "./BackgroundPage";
import useIsFiltering from "../../hooks/useIsFiltering";

function DynamicBacground() {
  const isFiltering = useIsFiltering();

  return (
    <>
      {isFiltering && <BackgroundId />}
      {!isFiltering && <BackgroundPage />}
    </>
  );
}

export default DynamicBacground;
