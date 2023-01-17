import useDataTable from "../hooks/useDataTable";
import useFetchData from "../hooks/useFetchData";
import * as React from "react";
import { GlobalStyles } from "@mui/material";

function DynamicBacground() {
  const [rows] = useDataTable();
  const [isSuccess] = useFetchData();

  const colors = rows.slice(0, 5).map((rows: any) => rows?.color) || [];

  const [strippedBackground, setStrippedBackground] = React.useState({
    pattern: "",
    size: "",
  });

  React.useEffect(() => {
    if (colors.length > 1) {
      setStrippedBackground({
        pattern: `linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 10%, ${colors[1]} 20%, ${colors[2]} 20%, ${colors[2]} 30%, ${colors[3]} 30%, ${colors[3]} 40%, ${colors[4]} 40%, ${colors[4]} 50%, ${colors[0]} 50%, ${colors[0]} 60%, ${colors[1]} 60%, ${colors[1]} 70%, ${colors[2]} 70%, ${colors[2]} 80%, ${colors[3]} 80%, ${colors[3]} 90%, ${colors[4]} 90%, ${colors[4]} 100%)`,
        size: "1200px 1200px",
      });
    } else {
      setStrippedBackground({
        pattern: `linear-gradient(45deg, #ffffff 25%, ${colors[0]} 25%, ${colors[0]} 50%, #ffffff 50%, #ffffff 75%, ${colors[0]} 75%, ${colors[0]} 100%)`,
        size: "600px 600px",
      });
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <GlobalStyles
      styles={{
        body: {
          backgroundImage: strippedBackground.pattern,
          backgroundSize: strippedBackground.size,
        },
      }}
    />
  );
}

export default DynamicBacground;
