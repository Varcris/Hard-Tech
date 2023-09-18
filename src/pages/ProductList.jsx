import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const ProductList = () => {
  const { products, isloading, error } = useContext(ProductsContext);
  if (isloading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {products?.length &&
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </>
  );
};

export default ProductList;
