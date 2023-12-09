import React, { useState } from 'react';

const ProductTable = () => {
  // Supongamos que tienes una lista de productos en tu estado
  const [productos, setProductos] = useState([
    {ProductTable}
    
  ]);

  // Función para manejar el borrado de un producto
  const handleBorrarProducto = (id) => {
    // Sacamos el producto con el id
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    // Actualizamos el estado con la nueva lista de productos
    setProductos(nuevosProductos);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre del Producto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>
              {/* Botón de Borrar Producto con la función de manejo onClick */}
              <button onClick={() => handleBorrarProducto(producto.id)}>
                Borrar Producto
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;