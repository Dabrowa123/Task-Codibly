import DataTable from "./DataTable";
import useFetchData from "../hooks/useFetchData";

function DataContent() {
  const [data, error, isLoading] = useFetchData();

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
