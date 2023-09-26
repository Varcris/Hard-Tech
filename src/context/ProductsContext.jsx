import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getData } from "../services/api";
import { endpoint } from "../services/endPoints";

export const ProductsContext = createContext(initialProduct); //

// eslint-disable-next-line react/prop-types
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true); // inicia en true porque cuando se carga la pagina se esta cargando la data
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const [productsPerPage, setProductsPerPage] = useState(8); // limite de productos por pagina
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const skip = (currentPage - 1) * productsPerPage; // cantidad de productos que se deben saltar para mostrar la pagina actual
  const [totalProducts, setTotalProducts] = useState(0); // cantidad total de productos
  const fetchProducts = async (query) => {
    console.log("FetchProducts en ejecución ---->");
    let data = [];
    try {
      setError(null);
      setIsLoading(true);
      console.log("await getData en ejecución ---->");
      data = await getData(query);
      console.log("SetProducts en ejecución ---->");
      setProducts(data.products);
      setTotalProducts(data.total);
      console.log("----> data");
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      console.log("getAllProducts en ejecución ---->");
      fetchProducts(endpoint.getAllProducts(productsPerPage, skip)); // se ejecuta cuando se carga la pagina por primera vez y cuando se cambia el valor de limitPage o de skip
    } else {
      console.log("searchProducts en ejecución ---->");
      fetchProducts(endpoint.searchProducts(searchText, productsPerPage, skip)); // se ejecuta cuando se cambia el valor de searchText
    }
  }, [searchText, skip]);

  const handleChangeCurrentPage = (page) => {
    console.log("handleChangeCurrentPage en ejecución");
    setCurrentPage(page);
    console.log(page);
  };

  const handleChangeSearch = (searchText) => {
    console.log("handleChangeSearch en ejecución");
    setSearchText(searchText);
    console.log(searchText);
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
