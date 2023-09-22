export const endpoint = {
  getAllProducts(limit = 30, skip = 0) {
    return `products?limit=${limit}&skip=${skip}`;
  },
  getSingleProduct(id) {
    return `products/${id}`;
  },
  searchProducts(query) {
    return `products/search?q=${query}`;
  },
};

// getAllProducts = "products";
// getSingleProduct ="products/:id";
// searchProduct = `products/search?q=${query}`;
