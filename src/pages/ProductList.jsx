import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import "../styles/productList.css";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, isloading, error } = useContext(ProductsContext);
  const [sortBy, setSortBy] = useState("");
  const handleSort = (type) => {
    // Función para cambiar el tipo de ordenamiento
    setSortBy(type);
  };

  return (
    <main>
      <h1>Productos</h1>
      <div className="mydiv">
        <button className="my-button" onClick={() => handleSort("ASC")}>
          Precio ASC
        </button>
        <button className="my-button" onClick={() => handleSort("DESC")}>
          Precio DESC
        </button>
      </div>
      <div>
        {isloading ? ( // Si isLoading es true, muestra "Loading..."
          <div>Loading...</div>
        ) : error ? ( // Si isLoading es false y error es true, muestra el error
          <div>{error}</div>
        ) : (
          // Si isLoading y error son false, muestra los productos
          products.map((prod) => (
            <Link to={`/products/${prod.id}`} key={prod.id}>
              <ProductCard product={prod} />
            </Link>
          ))
        )}
      </div>
      <Pagination />
    </main>
  );
};

export default ProductList;
