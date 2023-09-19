
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductDescription from "../pages/ProductDescription";

const ProductList = () => {
  const { products, isloading, error } = useContext(ProductsContext);
  const [sortBy, setSortBy] = useState('');

  const handleSort = (type) => {
    // Función para cambiar el tipo de ordenamiento
    setSortBy(type);
  };

  const sortedProducts = [...products]; // Clonamos el arreglo de productos para no modificarlo directamente

  if (sortBy === 'ASC') {
    sortedProducts.sort((a, b) => a.price - b.price); // Orden ascendente
  } else if (sortBy === 'DESC') {
    sortedProducts.sort((a, b) => b.price - a.price); // Orden descendente
  }

  if (isloading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h1>Product List</h1>
      <div className="mydiv">
        <button className="my-button" onClick={() => handleSort('ASC')}>Precio ASC</button>
        <button className="my-button" onClick={() => handleSort('DESC')}>Precio DESC</button>
      </div>
      {/* <ul>
        {products?.length &&
          products.map((product) => <li key={product.id}> <ProductDescription product={product} /> </li>)}
      </ul> */}
      <ul>
        {sortedProducts.length > 0 &&
          sortedProducts.map((product) => (
            <li key={product.id}>
              <ProductDescription product={product} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;