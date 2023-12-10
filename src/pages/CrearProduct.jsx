import React, { useState } from "react";

function CreateProduct() {
  
const [products, setProducts] = useState([]);

  const ProductTable = () => {
    const [newProduct, setNewProduct] = useState({
      name: "",
      description: "",
      price: 0,
    });

    const handleAddProduct = () => {
      // Añadir el nuevo producto
      const updatedProducts = [...products, newProduct];

      // Actualizar el estado de productos con el nuevo array
      setProducts(updatedProducts);

      // Resetear el nuevo producto
      setNewProduct({
        name: "",
        description: "",
        price: 0,
      });
    };

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={newProduct.name}
            onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción del producto"
            value={newProduct.description}
            onChange={(event) =>
              setNewProduct({ ...newProduct, description: event.target.value })
            }
          />
          <input
            type="number"
            placeholder="Precio del producto"
            value={newProduct.price}
            onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
          />
          <button onClick={handleAddProduct}>Añadir producto</button>
        </div>
      </>
    );
  };

  return <ProductTable />;
}

export default CreateProduct;


