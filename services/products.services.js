import http from "../http-common";

class ProductDataService {
    getAll() {
        return http.get("/products/getAll");
    }

    getAllProducts() {
        return http.get("/products/getAllProducts");
    }

    getById(id) {
        return http.get(`/products/getById/${id}`);
    }

    create(data) {
        return http.post("/products/create", data);
    }

    update(id, data) {
        return http.put(`/products/update/${id}`, data);
    }

    deleteById(id) {
        return http.delete(`/products/deleteById/${id}`);
    }


    getByCategory(title) {
        return http.get(`/products?category=${title}`);
    }
}

export default new ProductDataService();