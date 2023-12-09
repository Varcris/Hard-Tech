// eslint-disable-next-line react/prop-types
function ProductView({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0].image_url} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductView;
