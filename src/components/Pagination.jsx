import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "../styles/pagination.css";

// eslint-disable-next-line react/prop-types
export const Pagination = () => {
  const { productsPerPage, currentPage, onChangeCurrentPage, totalProducts } =
    useContext(ProductsContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    if (currentPage > 1) {
      onChangeCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageNumbers.length) {
      onChangeCurrentPage(currentPage + 1);
    }
  };

  const onSpecificPage = (nroPage) => {
    onChangeCurrentPage(nroPage);
  };

  return (
    <nav className="pagination">
      <button
        className={`pagination-prev ${currentPage === 1 ? "is-disable" : ""}`}
        onClick={onPrevPage}
      >
        Anterior
      </button>

      <ul className="pagination-list">
        {pageNumbers.map((nroPage) => (
          <li key={nroPage}>
            <a
              onClick={() => onSpecificPage(nroPage)}
              className={`${
                nroPage == currentPage ? "is-current" : ""
              } pagination-link `}
            >
              {nroPage}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? "is-disable" : ""
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </button>
    </nav>
  );
};
