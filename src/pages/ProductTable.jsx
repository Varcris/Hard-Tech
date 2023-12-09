import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../services/axios";

function ProductTable() {
  const { products, isloading, error, onNavigationChange } =
    useContext(ProductsContext);
  console.log(products);
  useEffect(() => {
    onNavigationChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deleteProduct(id) {
    if (!window.confirm("¿Está seguro que desea eliminar el producto?")) {
      return;
    }
    api
      .delete(`/products/${id}`)
      .then((res) => {
        console;
        alert(res.data.message);
        onNavigationChange();
      })
      .catch((err) => {
        console.log(err);
        alert("Error al eliminar el producto");
      })
      .finally(() => {});
  }

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
                    <button onClick={() => deleteProduct(product.id)}>
                      Eliminar
                    </button>
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
