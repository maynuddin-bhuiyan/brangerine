import Image from "next/image";
import React, { useEffect, useState } from "react";
import { caseStudiesData } from "../../data/casestudiesdata";
import styles from "./CaseStudiesPage.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

const CaseStudiesPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(null);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    if (router.query.page) {
      setCurrPage(Number(router.query.page));
    } else {
      setCurrPage(0);
    }
  }, [router.query.page]);

  return (
    <div className={styles.CaseStudiesHeroSec}>
      <h3>PAST PROJECTS</h3>
      <h1>Case Studies</h1>
      <div className={`container ${styles.StudiesHeroSec}`}>
        <div className="row">

          {caseStudiesData[currPage]?.data?.map((item, i) => (
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center" key={item?.id}>
              <div
                className={`${styles.StudieCard}`}
                onMouseOut={() => setShow(null)}
                onMouseOver={() => setShow(item?.id)}
              >
                <Image
                  width="665"
                  height="385"
                  src={item.id === show ? item?.hoverImage : item?.image}
                />

                {item.id === show ? (
                  <button
                    className={styles.StudieButton}
                    onMouseOver={() => setShow(null)}
                    onMouseOut={() => setShow(item?.id)}
                  >
                    <a href={item?.url} target="_blank" rel="noreferrer">
                      <span>{item?.butText}</span>
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}


          <nav aria-label="Page navigation example">
            <ul className={`pagination ${styles.studiePagination}`}>
              {
                currPage > 0 && <Link href={`/case-studies/?page=${currPage - 1}`}><li className="page-item"><a className={`page-link ${styles.PaginationButton}`} id={styles.PaginationButton} href="#"> <i className="ri-arrow-left-line" id={styles.iconLeft}></i> Previous</a></li></Link>
              }
              {
                caseStudiesData.map((data, i) => {
                  return (
                    <Link href={`/case-studies/?page=${i}`}>
                      <li className="page-item">
                        <a className={`page-link ${styles.PaginationItem} ${currPage == i && styles.active}`} href="#">{i + 1}</a>
                      </li>
                    </Link>
                  )
                })
              }
              {
                caseStudiesData.length > currPage + 1 && <Link href={`/case-studies/?page=${currPage + 1}`}><li className="page-item"><a className={`page-link ${styles.PaginationButton}`} href="#">Next <i className="ri-arrow-right-line" id={styles.iconRight}></i></a></li></Link>
              }
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
