import * as React from "react";
import DataTable from "./DataTable";
import { useFetchProductsQuery, RootState, setQuery } from "../store";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../hooks/useFetchData";

function DataContent() {
  const [data, error, isLoading] = useFetchData();
  // const dispatch = useDispatch();

  // const searchedId = useSelector((state: RootState) => {
  //   return state.searchedId.id;
  // });

  // React.useEffect(() => {
  //   if (searchedId !== "") {
  //     dispatch(setQuery(`id=${searchedId}`));
  //   } else {
  //     dispatch(setQuery("page=1"));
  //   }
  // }, [searchedId]);

  // const query = useSelector((state: RootState) => {
  //   return state.query[0];
  // });

  // const { data, error, isLoading } = useFetchProductsQuery(query);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    if ("status" in error) {
      if (error.status === 404) {
        content = <div>There is no prodct matching requested ID</div>;
      } else {
        content = (
          <div>
            <div>An error has occurred</div>
            <div>Status: {error.status}</div>
          </div>
        );
      }
    }
  } else {
    content = <DataTable />;
  }

  return <>{content}</>;
}

export default DataContent;
