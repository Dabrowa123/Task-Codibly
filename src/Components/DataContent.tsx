import DataTable from "./DataTable";
import { useFetchProductsQuery } from "../store";

function DataContent() {
  const { error, isLoading } = useFetchProductsQuery("page=1");

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>An error occured during loading products</div>;
  } else {
    content = <DataTable />;
  }

  return <>{content}</>;
}

export default DataContent;
