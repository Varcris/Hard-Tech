import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
      <h1>Not Found 404</h1>
      <p>La página que buscas no existe</p>
      <Link to="/">
        <span>Ir al Inicio</span>
      </Link>
    </>
  );
};
