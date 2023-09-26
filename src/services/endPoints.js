export const endpoint = {
  getAllProducts(limit = 30, skip = 0) {
    return `products?limit=${limit}&skip=${skip}`;
  },
  getSingleProduct(id) {
    return `products/${id}`;
  },
  searchProducts(query, limit, skip) {
    return `products/search?q=${query}&limit=${limit}&skip=${skip}`;
  },
};

// getAllProducts = "products";
// getSingleProduct ="products/:id";
// searchProduct = `products/search?q=${query}`;
