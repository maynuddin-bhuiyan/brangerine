import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.button_container}>
      <nav aria-label="Page navigation example">
        <ul className={`pagination ${styles.studiePagination}`}>
          <li className="page-item">
            <a
              className={`page-link ${styles.PaginationButton}`}
              id={styles.PaginationButton}
              href="#"
            >
              {" "}
              <i className="ri-arrow-left-line" id={styles.iconLeft}></i>{" "}
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.PaginationItem}`} href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.PaginationItem}`} href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.PaginationItem}`} href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.PaginationButton}`} href="#">
              Next <i className="ri-arrow-right-line" id={styles.iconRight}></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
