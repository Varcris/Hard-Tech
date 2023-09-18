import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getData } from "../services/api";
import { endPoint } from "../services/endPoints";

export const ProductsContext = createContext(initialProduct); //

// eslint-disable-next-line react/prop-types
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true); // inicia en true porque cuando se carga la pagina se esta cargando la data
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getData(endPoint.getAllProducts);
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, isloading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
