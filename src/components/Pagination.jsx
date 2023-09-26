import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

// eslint-disable-next-line react/prop-types
export const Pagination = ({ totalProducts }) => {
  const { productsPerPage, currentPage, handleChangeCurrentPage } =
    useContext(ProductsContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    if (currentPage > 1) {
      handleChangeCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageNumbers.length) {
      handleChangeCurrentPage(currentPage + 1);
    }
  };

  const onSpecificPage = (nroPage) => {
    handleChangeCurrentPage(nroPage);
  };

  return (
    <nav className="pagination">
      <button
        className={`pagination-prev ${currentPage === 1 ? "is-disable" : ""}`}
        onClick={onPrevPage}
      >
        Anterior
      </button>
      <button
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? "is-disable" : ""
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </button>
      <ul className="pagination-list">
        {pageNumbers.map((nroPage) => (
          <li key={nroPage}>
            <NavLink
              onClick={() => onSpecificPage(nroPage)}
              className={`pagination-link ${
                () =>  === currentPage ? "is-current" : ""
              }`}
            >
              {nroPage}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
