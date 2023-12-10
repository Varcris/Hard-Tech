/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  return (
    <div className="product-card">
      {console.log(product)}
      <img src={product.images[0].image_url} />
      <p>
        <b>{product.title}</b>
      </p>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
