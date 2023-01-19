import { GlobalStyles } from "@mui/material";
import { useSelector } from "react-redux";
import { useFetchIdQuery, RootState } from "../../store";

function BackgroundId() {
  const { data } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const product = data?.data;

  return (
    <GlobalStyles
      styles={{
        body: {
          backgroundImage: `linear-gradient(45deg, #ffffff 25%, ${product?.color} 25%, ${product?.color} 50%, #ffffff 50%, #ffffff 75%, ${product?.color} 75%, ${product?.color} 100%)`,
          backgroundSize: "600px 600px",
        },
      }}
    />
  );
}

export default BackgroundId;
