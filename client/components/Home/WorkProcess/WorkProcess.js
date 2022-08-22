import Image from "next/image";
import React from "react";
import styles from "./WorkProcess.module.css";

const WorkProcess = () => {
  const data = [
    {
      id: 1,
      logo: "/images/workprocess/DISCOVER.svg",
      title: "DISCOVER",
      text: "As a branding agency, we always start with a solid foundation to grow upon.  This means becoming immersive in our clients brand, understanding the market, and competition in the field.",
    },
    {
      id: 2,
      logo: "/images/workprocess/PLAN.svg",
      title: "PLAN",
      text: "To ensure growth moving forward, we develop a comprehensive strategy with our clients.  Working hand in hand we break down to the core of the brand, only to rebuild it, with a new direction. ",
    },
    {
      id: 3,
      logo: "/images/workprocess/DESIGN.svg",
      title: "DESIGN",
      text: "Our creative team captures the essence of a brand through imagery.  We deliver content that brings life & emotion to the brand.  Growing the identity in the process to ensure the success of the brand.",
    },
    {
      id: 4,
      logo: "/images/workprocess/EXECUTE.svg",
      title: "EXECUTE",
      text: "Time to turn creative concepts into a fresh brand worth following.  Engaging customers in the area through various tactics to increase brand awareness & help drive future sales.",
    },
    {
      id: 5,
      logo: "/images/workprocess/REAP.svg",
      title: "REAP",
      text: "Reap the benefits of an abundant rebrand & marketing campaign.  We take pride in our client's success.  It's what keeps us on our toes, motivates us along the way as well.  ",
    },
    {
      id: 6,
      logo: "/images/workprocess/ANALYZE.svg",
      title: "ANALYZE",
      text: "At the completion of every campaign, we take time understanding the results of the new process. Reviewing engagements, insights, and metrics to improve future market decisions. ",
    },
  ];
  return (
    <div className="container">
      <div className={styles.workProcess}>
        <div className={styles.workProcessHeadMain}>
          <div className={styles.workProcessHead}>
            <h1>Our Working Process</h1>
            <p>
              Much like healthy crops need rich soil, water and sunlight,
              businesses need a cohesive plan that incorporates research,
              branding and design.{" "}
            </p>
            <a className={styles.learnButton} href="#" target="_blank" rel="noreferrer">
              <i className="ri-arrow-right-up-line"></i>
              <span>Learn More About Us</span>
            </a>
          </div>
        </div>
        <div className={styles.workProcessInfo}>
          <div className={styles.scrollbar} id={styles.scrollbar_style}>
            <div className={styles.scrollInfo}>
              {data.map((item, i) => (
                <div className={styles.scrollInfoCard} key={item.id}>
                  <div className={styles.scrollInfoCardImg}>
                    <Image src={item.logo} alt="" width={40} height={40} />
                    <h1 className={styles.scrollInfoCardTitle}>{item.title}</h1>
                  </div>
                  <div className={styles.scrollInfoCardInfo}>
                    <p className={styles.scrollInfoCardText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
