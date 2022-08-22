import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const data = [
    {
      id: 1,
      logo: "/images/testimonials/image 485.png",
      text: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
      image: "/images/testimonials/Avatar Image.png",
      name: "Whatever",
      designation: "Whatever position, Whatever company",
    },
    {
      id: 2,
      logo: "/images/testimonials/image 486.png",
      text: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
      image: "/images/testimonials/Avatar Image.png",
      name: "Whatever",
      designation: "Whatever position, Whatever company",
    },
    {
      id: 3,
      logo: "/images/testimonials/image 487.png",
      text: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
      image: "/images/testimonials/Avatar Image.png",
      name: "Whatever",
      designation: "Whatever position, Whatever company",
    },
    {
      id: 4,
      logo: "/images/testimonials/image 488.png",
      text: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
      image: "/images/testimonials/Avatar Image.png",
      name: "Whatever",
      designation: "Whatever position, Whatever company",
    },
    {
      id: 5,
      logo: "/images/testimonials/image 485.png",
      text: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
      image: "/images/testimonials/Avatar Image.png",
      name: "Whatever",
      designation: "Whatever position, Whatever company",
    },
  ];
  return (
    <div className="container">
      <div className={styles.testimonials}>
        <h5>Testimonials</h5>
        <h1>What Our Clients Say</h1>
        <div className="testimonialSlider">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div className={styles.sliderContainer} key={item.id}>
                <div className={styles.sliderDiv}>
                  <img src={item.logo} alt="logo" />
                  <p>{item.text}</p>
                  <div className={styles.avatar}>
                    <img src={item.image} alt="avatar" />
                    <div className={styles.avatarInfo}>
                      <p>{item.name}</p>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
