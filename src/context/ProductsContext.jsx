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
  const [limitPage, setLimitPage] = useState(15); // limite de productos por pagina
  const [skip, setSkip] = useState(0); // cantidad de productos que se deben saltar para mostrar la pagina actual
  const [currentPage, setCurrentPage] = useState(1); // pagina actual

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
      fetchProducts(endpoint.getAllProducts(limitPage, skip)); // se ejecuta cuando se carga la pagina por primera vez y cuando se cambia el valor de limitPage o de skip
    } else {
      console.log("searchProducts en ejecución ---->");
      fetchProducts(endpoint.searchProducts(searchText)); // se ejecuta cuando se cambia el valor de searchText
    }
  }, [searchText, limitPage, skip]);

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
        currentPage,
        limitPage,
        skip,
        onChangeSearch: handleChangeSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
