import React from 'react';

function ProductDescription({ product }) {
  return (
    <div className="product-card">
      <img src={product.images[0]} />
      <p><b>{product.title}</b></p>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDescription;