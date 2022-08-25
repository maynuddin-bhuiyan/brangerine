import React, { createRef, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import Photo from "./Photo";
import Slider from "react-slick";
import { photos } from './photoData'
export default function Carousel() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth)
    }
  }, []);
  const [sliderIndex, setSliderIndex] = useState({
    next: 2
  });
  const PhotoSlider = createRef();
  const settings = {
    dots: width <= 768 ? true : false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.35,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setSliderIndex({ current, next: next + 2 });
    },
    // afterChange: (current, next) => {
    //   setSliderIndex({ current: current + 1, next });
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.35,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        },
      },
    ],
  };
  console.log(settings)
  const gotoNext = () => {
    PhotoSlider.current.slickNext();
    console.log(sliderIndex, "sliderIndex");
  };

  const gotoPrev = () => {
    PhotoSlider.current.slickPrev();
    console.log(sliderIndex, "sliderIndex");
  };
  return (
    <div className={styles.carousel_container}>
      <Slider {...settings} ref={PhotoSlider}>
        {
          photos.map((photo, index) => (
            <Photo
              id={photo.id}
              index={index}
              photo={photo}
              gotoPrev={gotoPrev}
              gotoNext={gotoNext}
              sliderIndex={sliderIndex}
            />
          ))
        }
      </Slider>
    </div>
  )
}
