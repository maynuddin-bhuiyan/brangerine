import Image from "next/image";
import React, { useState } from "react";
import styles from "./CaseStudiesPage.module.css";

const CaseStudiesPage = () => {
    const [show, setShow] = useState(null);
    
    const [currPage, setcurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [post, setPost] = useState([]);

  const postMap = {};
  useEffect(() => {
    if (posts.length < 8) {
      setPost(posts);
    } else {
      setPost(posts);
      const numberOfPages = Math.ceil(posts.length / 8);
      setTotalPages(numberOfPages);
      let start = 0;
      let end = 8;
      let pageIndex = 1;
      while (end < posts.length && pageIndex <= numberOfPages) {
        if (start === 0) {
          postMap[pageIndex] = posts.slice(start, end);
          start = end;
          end = start + 8;
          pageIndex += 1;
        } else {
          postMap[pageIndex] = posts.slice(start, end);
          start = end - 1;
          end = start + 8;
          pageIndex += 1;
        }
      }
      if (end > posts.length) {
        end = posts.length;
        postMap[pageIndex] = posts.slice(start + 1, end);
      }
    }
    setPost(postMap);
    console.log(postMap)
  }, []);
  

  console.log(currPage)

  function handlePage(index){
    setcurrPage(index)
  }

  if(post[currPage])

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
