import React from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const data = [
    {
      id: 1,
      number: "01",
      title: "BRAND DEVELOPMENT",
      text: "Give your brand life that will stand the test of time.  Effective branding is more than just a pretty logo; it tells your story, proves your identity, and establishes your personality.  If you find yourself still pushing for sales, perhaps it's time to push that orange button and request an appointment today.",
      linkText: "Learn More",
    },
    {
      id: 2,
      number: "02",
      title: "BUSINESS CONSULTING",
      text: "With the business world constantly changing, some are forced to either take action or face the reality of closing the doors to their business.  We saw an opportunity that could potentially save jobs & families alike. Remember the excitement you had when you first started?",
      linkText: "Learn More",
    },
    {
      id: 3,
      number: "03",
      title: "VIDEOGRAPHY",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first.  A short film could tell a story and captivate the audience at the same time.  The possibilities are endless but the availabilities are limited. Book your appointment today. ",
      linkText: "Learn More",
    },
  ];
  return (
    <div className="container">
      <div className={`row ${styles.faq}`}>
        <div className={`col-lg-5 col-md-5 col-sm-12  ${styles.faqInfo}`}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <a
            className={styles.contactButton}
            href="/contact"
            target="_blank"
            rel="noreferrer"
          >
            <i className={`ri-message-3-line ${styles.icon1}`}></i>
            <span>Contact with us</span>
            <i className={`ri-arrow-right-up-line ${styles.icon2}`}></i>
          </a>
        </div>
        <div className={`col-lg-7 col-md-7 col-sm-12`}>
          <div class="accordion" id="accordionExample">
            <div class={`accordion-item accordionItem ${styles.accordionItem}`}>
              <h2
                class={`accordion-header ${styles.accordionHeader}`}
                id="headingOne"
              >
                <button
                  class={`accordion-button ${styles.accordionButton}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  01 BRAND DEVELOPMENT
                </button>
              </h2>
              <div
                id="collapseOne"
                class={`accordion-collapse collapse show ${styles.accordionBody}`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class={`accordion-body ${styles.accordionBodyText}`}>
                  Give your brand life that will stand the test of time.
                  Effective branding is more than just a pretty logo; it tells
                  your story, proves your identity, and establishes your
                  personality. If you find yourself still pushing for sales,
                  perhaps it's time to push that orange button and request an
                  appointment today.
                  <a href="/contact" target="_blank">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class={`accordion-item accordionItem ${styles.accordionItem}`}>
              <h2
                class={`accordion-header ${styles.accordionHeader}`}
                id="headingTwo"
              >
                <button
                  class={`accordion-button collapsed ${styles.accordionButton}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  02 BUSINESS CONSULTING
                </button>
              </h2>
              <div
                id="collapseTwo"
                class={`accordion-collapse collapse ${styles.accordionBody}`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class={`accordion-body ${styles.accordionBodyText}`}>
                   With the business world constantly changing, some are forced
                  to either take action or face the reality of closing the doors
                  to their business. We saw an opportunity that could
                  potentially save jobs & families alike. Remember the
                  excitement you had when you first started?
                  <a href="/contact" target="_blank">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class={`accordion-item accordionItem ${styles.accordionItem}`}>
              <h2
                class={`accordion-header ${styles.accordionHeader}`}
                id="headingThree"
              >
                <button
                  class={`accordion-button collapsed ${styles.accordionButton}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                 03 VIDEOGRAPHY
                </button>
              </h2>
              <div
                id="collapseThree"
                class={`accordion-collapse collapse ${styles.accordionBody}`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class={`accordion-body ${styles.accordionBodyText}`}>
                  Motion creates emotion, and the key to selling any product is
                  to get your audience emotionally bought in first. A short film
                  could tell a story and captivate the audience at the same
                  time. The possibilities are endless but the availabilities are
                  limited. Book your appointment today.
                  <a href="/contact" target="_blank">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
