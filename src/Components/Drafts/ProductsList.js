import { useFetchProductsQuery } from "../store";

function ProductsList() {
  // const { data, error, isLoading } = useFetchProductsQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    // content = data.map((product) => {
    //   return (
    //     <>
    //       <div>{product.id}</div>
    //       <div>{product.name}</div>
    //       <div>{product.year}</div>
    //     </>
    //   );
    // });
  }

  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

export default ProductsList;
