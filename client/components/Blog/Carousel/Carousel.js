import React, { createRef } from "react";
import styles from "./Carousel.module.css";
import Photo from "./Photo";
import Slider from "react-slick";
export default function Carousel() {
  const PhotoSlider = createRef();
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
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
    PhotoSlider.current.slickNext();
  };

  const gotoPrev = () => {
    PhotoSlider.current.slickPrev();
  };
  return (
    <div className="row d-flex align-items-center">
      <Slider {...settings} ref={PhotoSlider}>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
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
  );
}
