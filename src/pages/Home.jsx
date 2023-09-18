import CartSummary from "../components/CartSummary";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="header">
        <h1>Lortech</h1>
        <div>
          <NavBar />
          <CartSummary />
        </div>
        <Link to="/products">Products</Link>
      </header>
      <section>
        <h2>Pagina Principal</h2>
      </section>
    </>
  );
}

export default Home;
