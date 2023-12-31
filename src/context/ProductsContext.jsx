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
  const productsPerPage = 4; // limite de productos por pagina
  const [navigationChange, setNavigationChange] = useState(false);
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
      fetchProducts(endpoint.getAllProducts(currentPage, productsPerPage));
    } else {
      fetchProducts(
        endpoint.searchProducts(searchText, currentPage, productsPerPage)
      );
    }
  }, [searchText, currentPage, navigationChange]);

  const handleChangeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleChangeSearch = (searchText) => {
    setSearchText(searchText);
  };

  const handleNavigationChange = () => {
    setNavigationChange(!navigationChange);
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
        onNavigationChange: handleNavigationChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
