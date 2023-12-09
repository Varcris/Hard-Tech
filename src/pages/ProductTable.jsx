import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

function ProductTable() {
  const { products, isloading, error } = useContext(ProductsContext);
  console.log(products);
  return (
    <main>
      {isloading ? ( // Si isLoading es true, muestra "Loading..."
        <div>Loading...</div>
      ) : error ? ( // Si isLoading es false y error es true, muestra el error
        <div>{error}</div>
      ) : (
        // Si isLoading y error son false, muestra los productos
        <>
          <Link to={`/create`}>
            <button>Crear producto</button>
          </Link>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Catgoria</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Valoración</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.rating}</td>
                  <td>
                    <Link to={`/update-product/${product.id}`}>
                      <button>Editar</button>
                    </Link>
                    <Link to={`/delete-product/${product.id}`}>
                      <button>Eliminar</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </>
      )}
    </main>
  );
}

export default ProductTable;
