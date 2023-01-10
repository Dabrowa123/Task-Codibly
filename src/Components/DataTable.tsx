import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid/index.js";
import { useFetchProductsQuery } from "../store";

export default function DataTable() {
  const { data, error, isLoading } = useFetchProductsQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    let products = data?.data;
    let rows = products;
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
      {
        field: "year",
        headerName: "Year",
        type: "number",
        width: 90,
      },
    ];
    content = (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );
  }

  return <>{content}</>;
}
