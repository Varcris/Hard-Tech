import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="bar">
        <h1>HardTech</h1>
        <SearchBar />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
