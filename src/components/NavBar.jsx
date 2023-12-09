import { SearchBar } from "./SearchBar";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="bar">
        <h1>HardTech</h1>
        <SearchBar />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
