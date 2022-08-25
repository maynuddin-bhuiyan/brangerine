import Image from "next/image";
import React, { createRef, useState } from "react";
import Slider from "react-slick";
import styles from "./CaseStudies.module.css";

const CaseStudies = () => {
  //creating the ref
  const CaseStudiesSlider = createRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    CaseStudiesSlider.current.slickNext();
  };

  const gotoPrev = () => {
    CaseStudiesSlider.current.slickPrev();
  };

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
  ];
  return (
    <div className={styles.CaseStudies}>
      <div className="abstractMore"></div>
      <div className={`container ${styles.CaseStudiesPart}`}>
        <div className="row">
          <h3>PAST PROJECTS</h3>
          <h1>Case Studies</h1>
          <Slider {...settings} ref={CaseStudiesSlider}>
            {data?.map((item, i) => (
              <div className="row d-flex align-items-center" key={item?.id}>
                <div
                  className={`${styles.StudieCarouselCard}`}
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
          </Slider>

          <div className={styles.StudieSlideButton}>
            <button onClick={() => gotoPrev()}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => gotoNext()}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
