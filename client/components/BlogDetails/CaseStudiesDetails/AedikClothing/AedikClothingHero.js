import Image from "next/image";
import React from "react";
import NextPrevious from "../NextPrevious/NextPrevious";
import styles from "./AedikClothingHero.module.css";
import AedikClothingSlider from "./AedikClothingSlider";

const AedikClothingHero = () => {
  const data = {
    image1: "/images/CaseStudies/Rectangle 25.png",
    image2: "/images/CaseStudies/motiv.png",
    preLink: "/cs-blackbeardpools",
    nextLink: "/cs-motivv",
    preText: "Blackbeard Pools - Full Service Pool Cleaning",
    nextText: "Motivv - Fitness Apparel"

  }
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
        <p>
          Indie apparel line Aedik Clothing needed various services to represent
          the brand. Photography to showcase the design process, graphic design
          & illustrations to screen print and use for their site, mockup
          photography of products, and a video production of Safety Orange's
          "State of Where I Am" showcasing the print process along the way.{" "}
        </p>
        <AedikClothingSlider />
        <h3 className={styles.videography}>Videography</h3>
        <p>
          Screen printing process of "Cruisin" T-shirt designed for the band
          Safety Orange. Featuring their hit song "State of Where I Am" Which
          pays homage to the sunshine state Cali. We have also designed Safety
          Oranges first album cover along with T-shirt designs like the
          following.
        </p>
        <iframe className={styles.aedikClothingVideo} height="537px" src="https://www.youtube.com/embed/_Q38H-Sjq6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className={styles.aedikEndImages}>
            <Image
          src="/images/CaseStudies/project 3/ADKdeck.jpg"
          width={224}
          height={224}
          />
            <Image
          src="/images/CaseStudies/project 3/Mushroomlogosticker.jpg"
          width={224}
          height={224}
          />
            <Image
          src="/images/CaseStudies/project 3/sunnynshroom.jpg"
          width={224}
          height={224}
          />
            <Image
          src="/images/CaseStudies/project 3/aedikcards.jpg"
          width={224}
          height={224}
          />
        </div>
        <NextPrevious image1={data.image1} image2={data.image2} preLink={data.preLink} nextLink={data.nextLink} preText={data.preText}nextText={data.nextText} />
      </div>
    </div>
  );
};

export default AedikClothingHero;
