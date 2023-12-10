export const endpoint = {
  getAllProducts(page = 1, per_page = 4) {
    return `products?page=${page}&per_page=${per_page}`;
  },
  getSingleProduct(id) {
    return `products/${id}`;
  },
  searchProducts(query, page, per_page) {
    return `products?category=${query}&page=${page}&per_page=${per_page}`;
  },
};

// getAllProducts = "products";
// getSingleProduct ="products/:id";
// searchProduct = `products/search?q=${query}`;
