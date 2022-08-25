import Image from "next/image";
import React from "react";
import styles from "./NextPrevious.module.css";

const NextPrevious = ({
  image1,
  image2,
  preLink,
  nextLink,
  preText,
  nextText,
}) => {
  return (
    <div className={styles.nextPrevious}>
      <div className={styles.nextPreviousContainer}>
        <div className={styles.nextPreviousImage}>
          <Image src={image1} width={80} height={80} />
        </div>
        <div>
          <div>
            <a href={preLink} className={styles.linkText}>
              <img src="/images/CaseStudies/arrow left.svg" alt="" />
              Previous project
            </a>
            <h3 className={styles.projectName}>{preText}</h3>
          </div>
        </div>
      </div>

      <div className={styles.nextPreviousContainer}>
        <div className={styles.nextPreviousImage}>
          <Image src={image2} width={80} height={80} />
        </div>
        <div>
          <div>
            <a href={nextLink} className={styles.linkText}>
              Next project{" "}
              <img src="/images/CaseStudies/arrow right.svg" alt="" />
            </a>

            <h3 className={styles.projectName}>{nextText}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPrevious;
