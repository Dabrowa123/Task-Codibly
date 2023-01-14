import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, searchId, addIdToURL } from "../store";
import useUrlState from "@ahooksjs/use-url-state";

function useStatefulURL() {
  const [state, setState] = useUrlState({ id: "", page: undefined });

  //   Load data from adress bar (when user will paste a link)
  const dispatch = useDispatch();
  const id = window.location.hash.slice(1);
  React.useEffect(() => {
    dispatch(searchId(state?.id));
    dispatch(addIdToURL(state?.id));
  }, []);

  // Insert into adress bar data from redux (filter & pagination info)
  const statefulURL = useSelector((state: RootState) => {
    return state.statefulURL;
  });

  React.useEffect(() => {
    setState({ id: statefulURL[0], page: statefulURL[1] });
  }, [statefulURL]);

  return;
}

export default useStatefulURL;
