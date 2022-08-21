import React from 'react';
import styles from "./WhatWeDo.module.css";


const WhatWeDo = () => {
    const data = [
        {
          id: 1,
          image: "/images/Jaw Dropping Features/dropping-features-1 1.svg",
          title: "BRAND DEVELOPMENT",
          number: "01",
          text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",         
        },
        {
          id: 2,
          number: "02",
          image: "/images/Jaw Dropping Features/dropping-features-2 1.svg",
          title: "BUSINESS CONSULTING",
          text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",          
        },
        {
          id: 3,
          number: "03",
          image: "/images/Jaw Dropping Features/dropping-features-3 1.svg",
          title: "VIDEOGRAPHY",
          text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. Learn More",          
        }
      ];

    return (
        <div className={styles.WhatWeDo}>
            <div className="container">
                
            </div>            
        </div>
    );
};

export default WhatWeDo;