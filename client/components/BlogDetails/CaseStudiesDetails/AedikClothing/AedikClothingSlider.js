import React from 'react';
import Slider from "react-slick";
// import image1 from "../../../../public/images/CaseStudies/project 3/abstract01.jpg";
// import image2 from "../../../../public/images/CaseStudies/project 3/abstract02.jpg";
// import image3 from "../../../../public/images/CaseStudies/project 3/abstract03.jpg";
// import image4 from "../../../../public/images/CaseStudies/project 3/abstract04.jpg";
// import image5 from "../../../../public/images/CaseStudies/project 3/abstract05.jpg";
// import image6 from "../../../../public/images/CaseStudies/project 3/abstract06.jpg";
// import { baseUrl } from "./config";

const AedikClothingSlider = () => {
    const settings = {
      customPaging: function(i) {
        return (
          <div>
                <img src={data[i].image} alt="" style={{ width: '100%', height:"100%",objectFit: "cover" }} />
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb custom-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const data = [
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract01.jpg"
        },
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract02.jpg"
        },
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract03.jpg"
        },
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract04.jpg"
        },
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract05.jpg"
        },
        {
            id: 1,
            image: "/images/CaseStudies/project 3/abstract06.jpg"
        },
    ]
    return (
        <div>
            <Slider {...settings}>
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

export default AedikClothingSlider;