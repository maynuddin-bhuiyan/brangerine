import Image from "next/image";
import React from "react";
import styles from "./AedikClothingHero.module.css";
import AedikClothingSlider from "./AedikClothingSlider";

const AedikClothingHero = () => {
  return (
    <div className="container">
          <div className={styles.aedikClothingHero}>
              <h4>Branding,web project</h4>
        <h1>Blackbeard Pools - Full Service Pool Cleaning</h1>
        <Image
          src="/images/CaseStudies/project 3/image-asset.png"
          width={956}
          height={612}
              />
              <h2>Artistic Energy Design Inspire Kinetic</h2>
              <p>Indie apparel line Aedik Clothing needed various services to represent the brand.  Photography to showcase the design process, graphic design & illustrations to screen print and use for their site, mockup photography of products, and a video production of Safety Orange's "State of Where I Am" showcasing the print process along the way.  </p>
              <AedikClothingSlider/>
      </div>
    </div>
  );
};

export default AedikClothingHero;
