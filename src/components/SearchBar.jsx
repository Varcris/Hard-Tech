import "../styles/searchbar.css";
const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </div>
  );
};

export default SearchBar;
