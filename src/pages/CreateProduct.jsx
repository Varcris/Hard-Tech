import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/axios";
import { useEffect } from "react";

function CreateProduct() {
  const [categories, setCategories] = useState([]);

  const createProduct = (data) => {
    api
      .post(`/products/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("error al crear el producto");
      })
      .finally(() => {});
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    createProduct(data);
    e.target.reset();
  }

  const getNamesCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNamesCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h2>Crear Productos</h2>
      <form
        className="createProduct"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" required />

        <label>
          Descripcion
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </label>

        <label htmlFor="price">Precio</label>
        <input type="number" name="price" id="price" required />

        <label htmlFor="stock">Stock</label>
        <input type="number" name="stock" id="stock" required />

        <label htmlFor="brand">Marca</label>
        <input type="text" name="brand" id="brand" required />

        <label htmlFor="category">Categoria</label>
        <select name="category" id="category" required>
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="discount_percentage">Porcentaje de descuento</label>
        <input
          type="number"
          name="discount_percentage"
          id="discount_percentage"
          required
        />

        <label htmlFor="images">Seleccione imagenes</label>
        <input type="file" multiple name="images" id="image" required />

        <div>
          <Link to="/table-products">
            <button>Volver</button>
          </Link>

          <button>Crear Producto</button>
        </div>
      </form>
    </main>
  );
}

export default CreateProduct;
