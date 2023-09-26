import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getData } from "../services/api";
import { endpoint } from "../services/endPoints";

export const ProductsContext = createContext(initialProduct); //

// eslint-disable-next-line react/prop-types
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // inicia en un arreglo vacio porque no hay productos
  const [isloading, setIsLoading] = useState(true); // inicia en true porque cuando se carga la pagina se esta cargando la data
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState(""); // texto de busqueda
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const [totalProducts, setTotalProducts] = useState(0); // cantidad total de productos
  const productsPerPage = 8; // limite de productos por pagina
  const skip = (currentPage - 1) * productsPerPage; // cantidad de productos que se deben saltar para mostrar la pagina actual

  const fetchProducts = async (query) => {
    let data = [];
    try {
      setError(null);
      setIsLoading(true);
      data = await getData(query);
      setProducts(data.products);
      setTotalProducts(data.total);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      fetchProducts(endpoint.getAllProducts(productsPerPage, skip));
    } else {
      fetchProducts(endpoint.searchProducts(searchText, productsPerPage, skip));
    }
  }, [searchText, skip]);

  const handleChangeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleChangeSearch = (searchText) => {
    setSearchText(searchText);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        isloading,
        error,
        productsPerPage,
        currentPage,
        totalProducts,
        onChangeCurrentPage: handleChangeCurrentPage,
        onChangeSearch: handleChangeSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
