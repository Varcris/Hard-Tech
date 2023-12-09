export const endpoint = {
  getAllProducts(page = 1, per_page = 4) {
    return `products?page=${page}&per_page=${per_page}`;
  },
  getSingleProduct(id) {
    return `products/${id}`;
  },
  searchProducts(query, page, per_page) {
    return `products?category=${query}&limit=${limit}&skip=${skip}`;
  },
};

// getAllProducts = "products";
// getSingleProduct ="products/:id";
// searchProduct = `products/search?q=${query}`;
