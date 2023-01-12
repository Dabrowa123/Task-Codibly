import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, searchId, addIdToURL } from "../store";

function useStatefulURL() {
  //   Load data from adress bar (when user will paste a link)
  const dispatch = useDispatch();
  const id = window.location.hash.slice(1);
  React.useEffect(() => {
    dispatch(searchId(id));
    dispatch(addIdToURL(id));
  }, []);

  // Insert into adress bar data from redux (filter & pagination info)
  const statefulURL = useSelector((state: RootState) => {
    return state.statefulURL[0];
  });
  React.useEffect(() => {
    window.location.hash = statefulURL;
  }, [statefulURL]);
  return;
}

export default useStatefulURL;
