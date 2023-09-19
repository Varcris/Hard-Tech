import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { NotFound } from "./components/NotFound";
import ProductList from "./pages/ProductList";
import { ProductsContextProvider } from "./context/ProductsContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ProductsContextProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}
export default App;
