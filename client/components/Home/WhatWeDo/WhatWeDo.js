import Image from "next/image";
import React, { useState } from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  const data = [
    {
      id: 1,
      image: "/images/WhatWeDo/brand_development.jpg",
      title: "BRAND DEVELOPMENT",
      number: "01",
      text: "Give your brand life that will stand the test of time.  Effective branding is more than just a pretty logo; it tells your story, proves your identity, and establishes your personality.  If you find yourself still pushing for sales, perhaps it's time to push that orange button and request an appointment today.",
    },
    {
      id: 2,
      number: "02",
      image: "/images/WhatWeDo/business_consulting .jpg",
      title: "BUSINESS CONSULTING",
      text: "With the business world constantly changing, some are forced to either take action or face the reality of closing the doors to their business.  We saw an opportunity that could potentially save jobs & families alike. Remember the excitement you had when you first started?",
    },
    {
      id: 3,
      number: "03",
      image: "/images/WhatWeDo/Videography.jpg",
      title: "VIDEOGRAPHY",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today.",
    },
  ];

  const [show, setShow] = useState(1);

  return (
    <div className={styles.WhatWeDo}>
      <div className="abstractRight"></div>
      <div className="abstractLeft"></div>
      <h3>What We Do</h3>
      <h1>In what area do you need assistance</h1>
      <div className={`container`}>
        <div className={`row`} id={styles.WhatWeDoPart}>
          <div
            className={`col-lg-6 col-md-6 col-sm-12  ${styles.WhatWeDoImage}`}
          >
            <div className={styles.imgShap}>
              <Image
                src={"/images/WhatWeDo/Ellipse_line_shape.svg"}
                width="740"
                height="720"
              />
            </div>

            <div className={styles.mainImag}>
              <Image
                src={data.find((item) => item?.id === show)?.image}
                width="600"
                height="580"
              />
            </div>

            <button className={styles.StudieButton}>
              <i className="ri-user-voice-line"></i>
              <p>Book Your appointment Today</p>
            </button>
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12  ${styles.WhatWeDoAccordion}`}
          >







             <div
              className={`accordion accordion-flush faqAccordion`}
              id="accordionPanelsStayOpenExample"
            >
              {data.map((item, index) => {
                return (
                  <div
                    className={`accordion-item ${styles.Accordion}`}
                    key={item?.id}
                  >
                    <h2
                      className={`accordion-header ${styles.Title}`}
                      // id={`panelsStayOpen-heading${item?.id}`}
                    >
                      <button
                        className={`accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${item.id}`}
                        aria-expanded={item.id === 1 ? "true" : "false"}
                        aria-controls={`panelsStayOpen-collapse${item.id}`}
                        onClick={() => setShow(item.id)}                        
                      >
                        <span>{item?.number}</span> {item?.title}{" "}
                      </button>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse${item.id}`}
                      className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                      aria-labelledby={`panelsStayOpen-heading${item.id}`}
                      data-bs-parent="#accordionPanelsStayOpenExample"
                    >
                      <div
                        className={`accordion-body  ${styles.AccordionBody}`}
                      >
                        {item?.text}
                        <a href="/" target="_blank" rel="noreferrer">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
