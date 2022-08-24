import Image from "next/image";
import React from "react";
import styles from "./BlackBeardPools.module.css";

const BlackBeardPools = () => {
  return (
    <div className="container">
      <div className={styles.BlackBeardPools}>
        <h4>Branding,web project</h4>
        <h1>Blackbeard Pools - Full Service Pool Cleaning</h1>
        <div className={styles.imageDiv}>
          <Image
            src="/images/CaseStudies/project 2/image1.png"
            width={956}
            height={612}
          />
        </div>
        <h2>Logo design </h2>
        <p>
          The client wanted a face of a pirate that was bold and would look well
          as a stand alone symbol. We started with sketched out concepts of the
          logo and text. The client was interested in keeping a pirate feel with
          the type as well. Blackbeard pools is a pool cleaning service
          currently looking to expand in other markets.
        </p>
        <div className={styles.imageDiv}>
          <Image
            src="/images/CaseStudies/project 2/image2.png"
            width={956}
            height={637}
          />
        </div>
              <h3>BUSINESS CARDS</h3>
      </div>
    </div>
  );
};

export default BlackBeardPools;
