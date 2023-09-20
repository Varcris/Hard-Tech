import "../styles/searchbar.css";
export const SearchBar = () => {
  return (
    <form className="searchbar">
      <input
        onChange={() => {}}
        type="search"
        name="search"
        id="search"
        placeholder="Smart TV, Notebook, zapatillas, etc..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
