import Image from "next/image";
import React from "react";
import styles from "./MacG.module.css";

const MacG = () => {
  return (
    <div className="container">
      <div className={styles.macG}>
        <h4>BRANDING,WEB PROJECT</h4>
        <h1>Mac G - THE BARBER</h1>
              <div className={styles.macGImage}>
                  <Image
          src="/images/CaseStudies/project 6/cardgilbert.png"
          width={674}
          height={450}
        />
              </div>
              <h2>Logo Design</h2>
              <p>Mr. Mac himself was interested in updating his logo and business cards.  We choose to capture him in the action as all of his clients book with him directly by phone.  The logo has urban script roots while still offering a modern approach with clean bold lines to compliment his style.</p>
               <Image
          src="/images/CaseStudies/project 6/MacGcards.png"
          width={956}
          height={637}
        />
      </div>
    </div>
  );
};

export default MacG;
