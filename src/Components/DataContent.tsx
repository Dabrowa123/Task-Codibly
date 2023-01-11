import * as React from "react";
import DataTable from "./DataTable";
import { useFetchProductsQuery } from "../store";

export default function DataContent() {
  const { error, isLoading } = useFetchProductsQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = <DataTable />;
  }

  return <>{content}</>;
}
