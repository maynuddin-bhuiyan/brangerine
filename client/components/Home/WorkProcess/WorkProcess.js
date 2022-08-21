import React from "react";
import styles from "./WorkProcess.module.css";

const WorkProcess = () => {
  return (
    <div className="container">
      <div className={styles.workProcess}>
        <div className={styles.workProcessHead}>
          <h1>Our Working Process</h1>
          <p>
            Much like healthy crops need rich soil, water and sunlight,
            businesses need a cohesive plan that incorporates research, branding
            and design.{" "}
          </p>
          <button className={styles.learnButton}>Learn More about us</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WorkProcess;
