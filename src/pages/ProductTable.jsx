import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Pagination } from "../components/Pagination";

function ProductTable() {
  const { products, isloading, error } = useContext(ProductsContext);
  console.log("Tabla de Prodcutos");
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Tile</th>
          <th>Cegory</th>
        </tr>
      </thead>
      <tbody>
        {isloading ? ( // Si isLoading es true, muestra "Loading..."
          <div>Loading...</div>
        ) : error ? ( // Si isLoading es false y error es true, muestra el error
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
