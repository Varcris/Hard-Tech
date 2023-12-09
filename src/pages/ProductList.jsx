import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import "../styles/productList.css";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, isloading, error } = useContext(ProductsContext);
  const [sortBy, setSortBy] = useState("");
  console.log("Lista de Prodcutos");
  console.log(products);
  const handleSort = (type) => {
    // Función para cambiar el tipo de ordenamiento
    setSortBy(type);
  };

  // ? El ordenamiento lo hace el backend, no es necesario hacerlo en el frontend
  // const sortedProducts = (products) => {
  //   let productsSorted = [...products]; // Clonamos el arreglo de productos para no modificarlo directamente
  //   if (sortBy === "ASC") {
  //     // Si el tipo de ordenamiento es ASC, ordena los productos de menor a mayor
  //     productsSorted.sort((a, b) => a.price - b.price); // Orden ascendente
  //   } else if (sortBy === "DESC") {
  //     // Si el tipo de ordenamiento es DESC, ordena los productos de mayor a menor
  //     productsSorted.sort((a, b) => b.price - a.price); // Orden descendente
  //   }
  //   return productsSorted;
  // };

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
