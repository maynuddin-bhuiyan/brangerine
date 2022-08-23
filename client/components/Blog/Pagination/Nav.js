import React from "react";
import styles from "./Nav.module.css";

export default function Nav({ totalPage, currentPage, setPage }) {
  const pages = []
  for(let i=1;i<=totalPage;i++){
    pages.push(i)
  }
  const handlePrevious = () => {
    const page = Number(currentPage) === 1 ? Number(currentPage) : Number(currentPage) - 1
    setPage(page)
  }
  const handleNext = () => {
    const page = Number(currentPage) === Number(totalPage) ? Number(currentPage) : Number(currentPage )+ 1
    setPage(page)
  }
  const handlePage = (e) => {
    setPage(e.target.value)
  }
  return (
    <div className={styles.button_container}>
      <nav aria-label="Page navigation example">
        <ul className={`pagination ${styles.studiePagination}`}>
          <li className="page-item">
            <button
              className={`page-link ${styles.PaginationButton}`}
              id={styles.PaginationButton}
              onClick={handlePrevious}
            >
              {" "}
              <i className="ri-arrow-left-line" id={styles.iconLeft}></i>{" "}
              Previous
            </button>
          </li>
          {
            pages.map(page => (
                <li className="page-item">
                    <button className={`page-link ${styles.PaginationItem}`} onClick={handlePage} value={page}>
                    {page}
                    </button>
                </li>
            ))
          }
          <li className="page-item">
            <button className={`page-link ${styles.PaginationButton}`} onClick={handleNext}>
              Next <i className="ri-arrow-right-line" id={styles.iconRight}></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
