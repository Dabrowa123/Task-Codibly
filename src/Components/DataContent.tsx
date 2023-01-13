import DataTable from "./DataTable";
import { useFetchProductsQuery, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

function DataContent() {
  const query = useSelector((state: RootState) => {
    return state.query[0];
  });
  const { error, isLoading } = useFetchProductsQuery(query);
  console.log(error);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
    // } else if (error?.status === 404) {
    //   content = <div>An error occured during loading products</div>;
  } else if (error) {
    content = <div>An error occured during loading products</div>;
  } else {
    content = <DataTable />;
  }

  return <>{content}</>;
}

export default DataContent;
