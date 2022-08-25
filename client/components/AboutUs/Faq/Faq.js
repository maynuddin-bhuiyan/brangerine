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
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {data.map((item, index) => (
              <div
                class={`accordion-item accordionItem ${styles.accordionItem}`}
                key={item?.id}
              >
                <h2
                  class={`accordion-header ${styles.accordionHeader}`}
                  id={`flush-heading${item.id}`}
                >
                  <button
                    class={`accordion-button collapsed ${styles.accordionButton}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${item.id} `}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${item.id}`}
                  >
                    {item.number} {item.title}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${item.id}`}
                  class={`accordion-collapse collapse ${styles.accordionBody}`}
                  aria-labelledby={`flush-heading${item.id}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class={`accordion-body ${styles.accordionBodyText}`}>
                    {item.text} <a href="/contact" target="_blank">{item.linkText}</a>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
