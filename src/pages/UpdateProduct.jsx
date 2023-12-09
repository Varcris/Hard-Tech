import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { Link } from "react-router-dom";
function UpdateProduct() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [discount_percentage, setDiscount_percentage] = useState(0);

  const getNamesCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const updateProduct = (input) => {
    api
      .patch(`/products/${id}`, input)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("Error al actualizar el producto");
      })
      .finally(() => {});
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    updateProduct(data);
  }

  const getProduct = () => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setStock(res.data.stock);
        setBrand(res.data.brand);
        setCategory(res.data.category);
        setDiscount_percentage(res.data.discount_percentage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getNamesCategories();
    getProduct();
  }, []);
  return (
    <div>
      <h1>Editar Producto</h1>
      <form onSubmit={handleSubmit} method="PATCH">
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>
          Descripcion
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <label htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <label htmlFor="brand">Marca</label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
          value={discount_percentage}
          onChange={(e) => setDiscount_percentage(e.target.value)}
        />

        <Link to="/table-products">
          <button>Volver</button>
        </Link>

        <button>Guardar Cambios</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
