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
    slidesToShow: 3,
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
      butText: "View Case Study",
      url: "/cs-pinnacle",
    },
    {
      id: 2,
      hoverImage: "/images/CaseStudies/Blackbeardcards.png",
      image: "/images/CaseStudies/Component 3.jpg",
      butText: "View Case Study",
      url: "/cs-blackbeardpools",
    },
    {
      id: 3,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/projects/Photo+Sep+19,+3+19+20+PM.png",
      butText: "View Case Study",
      url: "/cs-aedikclothing",
    },
    {
      id: 4,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/projects/motivvbanner.png",
      butText: "View Case Study",
      url: "/cs-motivv",
    },
    {
      id: 5,
      hoverImage: "/images/CaseStudies/Pinnaclewebsite+.png",
      image: "/images/CaseStudies/projects/chasing_ghosts.png",
      butText: "View Case Study",
      url: "/cs-rileyzavala",
    },
    {
      id: 6,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/projects/cardgilbert3.png",
      butText: "View Case Study",
      url: "/cs-macg",
    },
    {
      id: 7,
      hoverImage: "/images/CaseStudies/Blackbeardcards.png",
      image: "/images/CaseStudies/projects/mannabanner.png",
      butText: "View Case Study",
      url: "/",
    },
    {
      id: 8,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/projects/awesproutbanner.png",
      butText: "View Case Study",
      url: "/",
    },
    {
      id: 9,
      hoverImage: "/images/CaseStudies/Pinnaclewebsite+.png",
      image: "/images/CaseStudies/projects/agbusinessclubbanner.png",
      butText: "View Case Study",
      url: "/",
    },
    {
      id: 10,
      hoverImage: "/images/CaseStudies/image-asset.png",
      image: "/images/CaseStudies/projects/optmscbanner.png",
      butText: "View Case Study",
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

      <Slider {...settings} className={`slickSlider ${styles.CaseStudiesCarousel}`} ref={CaseStudiesSlider}>
            {data?.map((item, i) => (
              <div className="row d-flex align-items-center" key={item?.id}>
                <div
                  className={`${styles.StudieCarouselCard}`}
                  onMouseOut={() => setShow(null)}
                  onMouseOver={() => setShow(item?.id)}
                >
                  <Image
                    width="615"
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
    </div>
  );
};

export default CaseStudies;
