import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setId, setPage } from "../store";
import useUrlState from "@ahooksjs/use-url-state";

function useStatefulURL() {
  const [state, setState] = useUrlState({ id: "", page: 0 });

  //   Load data from adress bar (when user will paste a link)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setId(state?.id));
    dispatch(setPage(+state?.page));
    // eslint-disable-next-line
  }, []);

  // Insert into adress bar data from redux (filter & pagination info)
  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });

  React.useEffect(() => {
    setState({ id: idAndPageParams?.id, page: idAndPageParams?.page });
  }, [idAndPageParams, setState]);

  return <></>;
}

export default useStatefulURL;