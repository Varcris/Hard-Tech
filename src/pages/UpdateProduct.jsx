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
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  function handleSelectImages(e, image) {
    const alreadySelected = selectedImages.findIndex(
      (i) => i.public_id === image.public_id
    );

    if (alreadySelected >= 0) {
      const filteredImages = selectedImages.filter(
        (i) => i.public_id !== image.public_id
      );
      e.target.classList.remove("selected-image"),
        setSelectedImages(filteredImages);
      console.log(filteredImages);
    } else {
      e.target.classList.add("selected-image");
      setSelectedImages([...selectedImages, image]);
      console.log([...selectedImages, image]);
    }
  }

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

  const addImage = (input) => {
    api
      .post(`/products/${id}/images`, input, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        getProduct();
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("Error al agregar la imagen");
      });
  };

  const deleteImages = (images) => {
    api(
      {
        method: "POST",
        url: `/products/${id}/delete-images`,
        data: images,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        alert(res.data.message);
        getProduct();
      })
      .catch((err) => {
        console.log(err);
        alert("Error al eliminar la imagen");
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    updateProduct(data);
  }

  function handleSubmitAddImage(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    addImage(data);
  }

  function handleSubmitDeleteImage(e) {
    e.preventDefault();
    const images = {
      images: selectedImages,
    };
    deleteImages(images);
  }

  const getProduct = () => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setStock(res.data.stock);
        setBrand(res.data.brand);
        setCategory(res.data.category);
        setDiscount_percentage(res.data.discount_percentage);
        setImages(res.data.images);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getNamesCategories();
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="updateProduct">
      <section>
        <h2>Editar Datos</h2>
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

          <div>
            <Link to="/table-products">
              <button>Volver</button>
            </Link>

            <button>Guardar Cambios</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Editar Imagenes</h2>
        <div className="images-container">
          <ul className="images-preview">
            {images.map((image, index) => (
              <li key={index} onClick={(e) => handleSelectImages(e, image)}>
                <img src={image.image_url} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmitAddImage}
          encType="multipart/form-data"
          method="POST"
        >
          <label htmlFor="images">Seleccione imagenes</label>
          <input type="file" multiple name="images" id="image" />
          <button>Agregar Imagen</button>
        </form>
        <form
          onSubmit={handleSubmitDeleteImage}
          method="post"
          encType="aplication/json"
        >
          <button>Eliminar Imagen</button>
        </form>
      </section>
    </main>
  );
}

export default UpdateProduct;
