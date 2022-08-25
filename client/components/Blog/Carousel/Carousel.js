import React, { createRef,useEffect,useState } from "react";
import styles from "./Carousel.module.css";
import Photo from "./Photo";
import Slider from "react-slick";
import {photos} from './photoData'
export default function Carousel() {
  const [width,setWidth] = useState(0)
  useEffect(() => {
    if(typeof window !== undefined){
      setWidth(window.innerWidth)
    }
  },[])
  const PhotoSlider = createRef();
  const settings = {
    dots: width <= 768 ? true : false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.35,
    slidesToScroll: 1,
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
  };

  const gotoPrev = () => {
    PhotoSlider.current.slickPrev();
  };
  if(width !== 0){
    if(width >= 768){
      return (
        <div className={styles.carousel_container}>
          <Slider {...settings} ref={PhotoSlider}>
            {
                photos.map(photo => (
                    <Photo id={photo.id} photo={photo}/>
                ))
            }
          </Slider>
          <div className={styles.slider_buttons}>
            <button onClick={() => gotoPrev()} className={styles.slider_button_left}>
            <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => gotoNext()} className={styles.slider_button_right}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    }else{
      return(
        <div className={styles.carousel_container}>
          <Slider {...settings} ref={PhotoSlider}>
            {
                photos.map(photo => (
                    <Photo id={photo.id} index={photo.id} photo={photo}/>
                ))
            }
          </Slider>
          {/* <div className={styles.slider_buttons}>
            <button onClick={() => gotoPrev()} className={styles.slider_button_left}>
            <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => gotoNext()} className={styles.slider_button_right}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div> */}
        </div>
      )
    }
  }
}
