import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddProduct from "./components/add-product-component";
import Product from "./components/product-component";
import ProductsList from "./components/list-product-component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/Products"} className="navbar-brand">
            HardTech
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ProductsList/>} />
            <Route path="/Products" element={<ProductsList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/Products/:id" element={<Product/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;