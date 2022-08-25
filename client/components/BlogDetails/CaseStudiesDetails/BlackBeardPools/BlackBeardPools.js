import Image from "next/image";
import React from "react";
import Comments from "../Comments/Comments";
import NextPrevious from "../NextPrevious/NextPrevious";
import styles from "./BlackBeardPools.module.css";

const BlackBeardPools = () => {
  const data = {
    image1: "/images/CaseStudies/pin.png",
    image2: "/images/CaseStudies/Rectangle 466.png",
    preLink: "/cs-pinnacle",
    nextLink: "/cs-aedikclothing",
    preText: "Pinnacle - Rise To The Top",
    nextText: "Aedik Clothing - Streetwear",
    comment: "Brangerine did the best job with listening and bringing what I was looking for in a logo.",
    commentator: "— Andrew 'BlackBeard' Hinojosa"
  }
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
        <Comments comment={data.comment} commentator={data.commentator}/>
        
        <div className={styles.next}>
          <NextPrevious image1={data.image1} image2={data.image2} preLink={data.preLink} nextLink={data.nextLink} preText={data.preText} nextText={data.nextText} />
          
        </div>
      </div>
    </div>
  );
};

export default BlackBeardPools;
