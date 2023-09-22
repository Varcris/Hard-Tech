import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import { useRef } from "react";
import "../styles/searchbar.css";

export const SearchBar = () => {
  const { onChangeSearch } = useContext(ProductsContext);
  const searchText = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeSearch(searchText.current.value);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        ref={searchText}
        type="search"
        name="search"
        id="search"
        placeholder="Smart TV, Notebook, zapatillas, etc..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
