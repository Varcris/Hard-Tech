import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import ProductList from "./pages/ProductList";
import { ProductsContextProvider } from "./context/ProductsContext";
import "./App.css";
import ProductView from "./pages/ProductView";
import ProductTable from "./pages/ProductTable";

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route patch="/products/table" element={<ProductTable />} />
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}
export default App;
