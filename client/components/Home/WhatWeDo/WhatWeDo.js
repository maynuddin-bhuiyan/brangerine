import Image from "next/image";
import React, { useState } from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  const data = [
    {
      id: 1,
      image: "/images/WhatWeDo/",
      title: "BRAND DEVELOPMENT",
      number: "01",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",
    },
    {
      id: 2,
      number: "02",
      image: "/images/WhatWeDo/",
      title: "BUSINESS CONSULTING",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",
    },
    {
      id: 3,
      number: "03",
      image: "/images/WhatWeDo/",
      title: "VIDEOGRAPHY",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",
    },
  ];

  const [] = useState();

  return (
    <div className={styles.WhatWeDo}>
      <div className={styles.leftShap}></div>
      <h3>What We Do</h3>
      <h1>In what area do you need assistance</h1>
      <div className="container">
        <div className="row">
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
                src={"/images/WhatWeDo/Videography.jpg"}
                width="600"
                height="580"
              />
            </div>
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12  ${styles.WhatWeDoAccordion}`}
          >
            <div
              className={`accordion accordion-flush mt-4 faqAccordion`}
              id="accordionFlushExample"
            >
              {data.map((item, index) => {
                return (
                  <div
                    className={`accordion-item ${styles.Accordion}`}
                    key={item?.id}
                  >
                    <h2
                      className={`accordion-header ${styles.Title}`}
                      id={`flush-heading${item?.id}`}
                    >
                      <button
                        className={`accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${item.id}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${item.id}`}
                      >
                        <span>{item?.number}</span> {item?.title}{" "}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${item.id}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className={`accordion-body  ${styles.AccordionBody}`}
                      >
                        {item?.text}
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
