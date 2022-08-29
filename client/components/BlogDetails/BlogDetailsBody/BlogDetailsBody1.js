import React from "react";
import styles from "./BlogDetailsBody.module.css";

const BlogDetailsBody1 = () => {
  return (
    <div className="container">
      <div className={styles.div}>
        <h1 className={styles.title}>ALIENS ON THE AVE NFT </h1>
        <p className={styles.text}>
          AOTA is the first NFT to bring creatives together under one roof. We
          had envisioned a place to collaborate with other like minded people.
          Owning an AOTA NFT grants access to The Creative Haven. With in this
          space we intend on providing real world utility such as the Following:
        </p>
        <p className={styles.text}>
          - Yoga by certified yogis{" "}
          <a className={styles.link} href="https://rivershima.com/">
            River
          </a>
        </p>
        <p className={styles.text}>
          - Mindful meditation and Sound baths (coming soon)
        </p>
        <p className={styles.text}>
          - Exclusive Merch by our team of designers
        </p>
        <p className={styles.text}>- Member only co working space</p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.title}>ADDITIONALLY </h1>
        <p className={styles.text}>
          We intend on making a difference by providing clean water & power to
          places all over the world, starting with Kenya, Africa 2023. Also with
          every NFT sold we will be planting trees all over the world with the
          help of{" "}
          <a href="https://onetreeplanted.org/" className={styles.link}>
            One Tree Planted
          </a>{" "}
          &{" "}
          <a className={styles.link} href="https://givepower.org/">
            The Give Power Foundation.
          </a>{" "}
        </p>
        <p className={styles.text}>
          We have been poured passion, hard work, and money into bringing AOTA
          to life. Moving into 2023 we will be bringing Blockchain projects to
          life. With the help of Apexdv. Whom is currently working to revamp our
          new site. There are many changes for Brangerine in the works and AOTA
          is the start of something so much bigger.{" "}
        </p>
        <p className={styles.text}>
          MINT is live now on the company website{" "}
          <a className={styles.link} href="https://www.aliensontheave.com/">
            Aliens On The Ave
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailsBody1;
