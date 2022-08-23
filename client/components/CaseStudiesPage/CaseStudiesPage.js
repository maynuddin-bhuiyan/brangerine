import Image from "next/image";
import React, { useState } from "react";
import styles from "./CaseStudiesPage.module.css";

const CaseStudiesPage = () => {
    const [show, setShow] = useState(null);

  const data = [
    {
      id: 1,
      hoverImage: "/images/CaseStudies/Pinnaclewebsite+.png",
      image: "/images/CaseStudies/Component 2.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 2,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 3,
      hoverImage: "/images/CaseStudies/Blackbeardcards.png",
      image: "/images/CaseStudies/Component 4.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 4,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 5,
      hoverImage: "/images/CaseStudies/Pinnaclewebsite+.png",
      image: "/images/CaseStudies/Component 2.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 6,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 7,
      hoverImage: "/images/CaseStudies/Blackbeardcards.png",
      image: "/images/CaseStudies/Component 4.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 8,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 9,
      hoverImage: "/images/CaseStudies/Pinnaclewebsite+.png",
      image: "/images/CaseStudies/Component 2.jpg",
      butText: "View Case Studie",
      url: "/",
    },
    {
      id: 10,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Studie",
      url: "/",
    },
  ];

  return (
    <div className={styles.CaseStudiesHeroSec}>
      <h3>PAST PROJECTS</h3>
      <h1>Case Studies</h1>
      <div className={`container ${styles.StudiesHeroSec}`}>
        <div className="row">    
         
          {data?.map((item, i) => (
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
    <li className="page-item"><a className={`page-link ${styles.PaginationButton}`} id={styles.PaginationButton} href="#"> <i className="ri-arrow-left-line" id={styles.iconLeft}></i> Previous</a></li>
    <li className="page-item"><a className={`page-link ${styles.PaginationItem}`} href="#">1</a></li>
    <li className="page-item"><a className={`page-link ${styles.PaginationItem}`} href="#">2</a></li>
    <li className="page-item"><a className={`page-link ${styles.PaginationItem}`} href="#">3</a></li>
    <li className="page-item"><a className={`page-link ${styles.PaginationButton}`} href="#">Next <i className="ri-arrow-right-line" id={styles.iconRight}></i></a></li>
  </ul>
</nav>
        </div>
        </div>    
     </div>
  );
};

export default CaseStudiesPage;
