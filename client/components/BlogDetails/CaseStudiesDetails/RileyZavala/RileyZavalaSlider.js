import React from 'react';
import Slider from "react-slick";

const RileyZavalaSlider = () => {
    const settings = {
      customPaging: function(i) {
        return (
          <div>
                <img src={data[i].image} alt="" style={{ width: '100%', height:"100%",objectFit: "cover" }} />
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb custom-indicators",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const data = [
        {
            id: 1,
            image: "/images/CaseStudies/project 5/chasing_ghosts2.png"
        },
        {
            id: 2,
            image: "/images/CaseStudies/project 5/chasing_ghostsback2.png"
        },
    ]
    return (
        <div className="rileyZavalaSlider">
            <Slider {...settings} >
                {
                    data.map((item, index) => (
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                    ))
          }
        </Slider>
        </div>
    );
};

export default RileyZavalaSlider;