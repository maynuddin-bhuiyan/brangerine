import React, { createRef, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import Photo from "./Photo";
import Slider from "react-slick";
import { photos } from "./photoData";
export default function Carousel() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);
  const dotCondition =
    width > 768
      ? {
          next: 2,
        }
      : {
          current: 1,
          next: 2,
        };
  const [sliderIndex, setSliderIndex] = useState(dotCondition);
  // console.log("SLIDER INDEX", sliderIndex);

  const PhotoSlider = createRef();
  const settings = {
    dots: width <= 768 ? true : false,
    arrows: false,
    infinite: true,
    speed: 500,
    swipe: width <= 768 ? true : false,
    slidesToShow: 2.35,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      if (width) {
        if (width > 768) {
          setSliderIndex({ current, next: next + 2 });
        }
      }
    },
    afterChange: (i) => {
      if (width) {
        if (width < 768) {
          if (typeof sliderIndex === "object" && sliderIndex !== null) {
            setSliderIndex({
              current: i + 1,
            });
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
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
  if (width) {
    if (width > 768) {
      return (
        <div className={styles.carousel_container}>
          <Slider {...settings} ref={PhotoSlider}>
            {photos.map((photo, index) => (
              <Photo
                key={photo.id}
                index={index}
                photo={photo}
                gotoPrev={gotoPrev}
                gotoNext={gotoNext}
                sliderIndex={sliderIndex}
                length={photos.length}
              />
            ))}
          </Slider>
        </div>
      );
    } else {
      return (
        <div className={styles.container_dots}>
          <div className={styles.carousel_container}>
            <Slider {...settings} ref={PhotoSlider}>
              {photos.map((photo, index) => (
                <Photo
                  id={photo.id}
                  index={index}
                  photo={photo}
                  gotoPrev={gotoPrev}
                  gotoNext={gotoNext}
                  sliderIndex={sliderIndex}
                />
              ))}
            </Slider>
          </div>
          <div className={styles.dots}>
            {photos.map((photo) => (
              <div
                id={photo.id}
                className={`${styles.dot} ${
                  Number(photo.id) === sliderIndex.current ? styles.big_dot : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      );
    }
  }
}
