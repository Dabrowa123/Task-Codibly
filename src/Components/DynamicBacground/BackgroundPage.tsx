import { GlobalStyles } from "@mui/material";
import { useSelector } from "react-redux";
import { useFetchPageQuery, RootState } from "../../store";
import { Product } from "../../store/apis/productsApi";

function DynamicBacground() {
  const { data } = useFetchPageQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const products = data?.data || [];

  const colors = products.slice(0, 5).map((product: Product) => product?.color);

  return (
    <GlobalStyles
      styles={{
        body: {
          backgroundImage: `linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 10%, ${colors[1]} 20%, ${colors[2]} 20%, ${colors[2]} 30%, ${colors[3]} 30%, ${colors[3]} 40%, ${colors[4]} 40%, ${colors[4]} 50%, ${colors[0]} 50%, ${colors[0]} 60%, ${colors[1]} 60%, ${colors[1]} 70%, ${colors[2]} 70%, ${colors[2]} 80%, ${colors[3]} 80%, ${colors[3]} 90%, ${colors[4]} 90%, ${colors[4]} 100%)`,
          backgroundSize: "1200px 1200px",
        },
      }}
    />
  );
}

export default DynamicBacground;
