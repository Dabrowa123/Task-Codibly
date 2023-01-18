import * as React from "react";
import {
  useFetchPageQuery,
  useFetchIdQuery,
  RootState,
  setModalData,
} from "../store";
import { useSelector, useDispatch } from "react-redux";
import {
  PageEndPoint,
  IdEndpoint,
  Product,
  Support,
} from "../store/apis/productsApi";

function useFetchData() {
  const dispatch = useDispatch();

  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });


//   const [fetchedData, setFetchedData] = React.useState<
//     PageEndPoint | IdEndpoint
//   >();
//   const [productsError, setProductsError] = React.useState();
//   const [areProductsFetching, setAreProductsFetching] = React.useState();
//   const [products, setProducts] = React.useState<Product[] | Product>();

//   //   React.useEffect(() => {
//   if (idAndPageParams.id !== "") {
//     // const { data, error, isFetching } = useFetchIdQuery(idAndPageParams);
//     // setFetchedData(data);
//     // setProductsError(error);
//     // setAreProductsFetching(isFetching);
//   } else if (idAndPageParams.page > 0) {
//     // const { data, error, isFetching } = useFetchPageQuery(idAndPageParams);
//     // setFetchedData(data);
//     // setProductsError(error);
//     // setAreProductsFetching(isFetching);
//   } else {
//     // const { data, error, isFetching } = useFetchPageQuery(idAndPageParams);
//     // setFetchedData(data);
//     // setProductsError(error);
//     // setAreProductsFetching(isFetching);
//   }
//   //   }, [idAndPageParams]);

//   // Normalization of data
// //   if (idAndPageParams.id !== "") {
// //     setProducts(fetchedData?.data);
// //   } else {
// //     setProducts(fetchedData?.data);
// //   }

// //   console.log(products);

  return [];
  //   return [products, productsError, areProductsFetching];
}

export default useFetchData;
