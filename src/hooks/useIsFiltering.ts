import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function useIsFiltering() {
  const SearchedId = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  const [isFiltering, setIsFiltering] = React.useState(false);

  React.useEffect(() => {
    SearchedId === "" ? setIsFiltering(false) : setIsFiltering(true);
  }, [SearchedId]);

  return isFiltering;
}

export default useIsFiltering;
