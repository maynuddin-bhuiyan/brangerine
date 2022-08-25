import Image from "next/image";
import React from "react";
import Comments from "../Comments/Comments";
import NextPrevious from "../NextPrevious/NextPrevious";
import styles from "./Motivv.module.css";

const Motivv = () => {
   const data = {
    image1: "/images/CaseStudies/Rectangle 466.png",
    image2: "/images/CaseStudies/chasing.png",
    preLink: "/cs-aedikclothing",
    nextLink: "/cs-rileyzavala",
    preText: "Aedik Clothing - Streetwear",
    nextText: "Riley Zavala - Independent Artist",
     comment: "Man! Words can’t even explain how happy and satisfied I am with my logo for my brand from here. They gave me a deadline of when he would have things and they met them! Jake Flores knows what he is doing and is highly recommended! Thanks again Brangerine for your services!",
    commentator: "— Derrick Jenkins"
  }
  return (
    <div className="container">
      <div className={styles.motivv}>
        <h4>Branding,web project</h4>
        <h1>Motivv - FITNESS APPAREL</h1>

        <div className={styles.work}>
          <div>
            <h2 className={styles.workTitle}>Scope of Work</h2>
            <div className={styles.workList}>
              <li>Logo & Symbol</li>
              <li>Website</li>
              <li>Tagline</li>
              <li>Photography</li>
              <li>Product Design</li>
            </div>
          </div>
          <div>
            <Image
              src="/images/CaseStudies/project 4/christenmotivv+1.jpg"
              width={468}
              height={968}
            />
          </div>
        </div>

        <div className={styles.logo}>
          <div className={styles.logoInfo}>
            <h2>Logo</h2>
            <p>
              Motivv is a fitness lifestyle brand founded in 2017 by Derrick
              Jenkins. Derrick came to us with an idea for a motivational brand,
              that emphasizes on hard motives, and God. We set out to create a
              bold type logo to showcase it's unique double V spelling. To
              accompany a brand like Motivv we also designed a symbol that would
              also showcase the double V and M as a bold monogram.{" "}
            </p>
          </div>
          <div>
            <Image
              src="/images/CaseStudies/project 4/weblogo.png"
              width={461}
              height={138}
            />
          </div>
        </div>

        <div className={styles.symbol}>
          <div className={styles.symbolImage}>
            <Image
              src="/images/CaseStudies/project 4/favicon.png"
              width={131}
              height={130}
            />
          </div>
          <div className={styles.symbolInfo}>
            <h2>Symbol</h2>
            <p>
              The Motivv symbol is both Iconic and bold. It has movement, and
              the negative space of arrows represent two paths one can take. A
              purpose filled life full of strong motives, or a simple side
              lacking motivation. Motivv is all about motivating others to be a
              better version of themselves. The "M" also forms two "V"s in the
              process. A unique trait to the brand.
            </p>
          </div>
        </div>

        <Comments comment={data.comment} commentator={data.commentator}/>

              <div>
                    <Image
              src="/images/CaseStudies/project 4/websitemock.png"
              width={956}
              height={634}
            />
            </div>

              <div className={styles.website}>
                  <h2>Website</h2>
                  <p>We decided to be bold and simple for the website.  It had to be easy to navigate and full of rich photography.  As any business grows it is important to stick to the basics and not over complicate things.  A parallax scrolling animation compliments the photos very well while giving the website a sense of class and modern feel.  Take a look for yourself <a href="https://www.motivv.net/">here.</a></p>
              </div>

              <div className={styles.goGetITLogo}>
                  <Image
              src="/images/CaseStudies/project 4/gogetitt.png"
              width={461}
              height={101}
            />
        </div>
         <NextPrevious image1={data.image1} image2={data.image2} preLink={data.preLink} nextLink={data.nextLink} preText={data.preText}nextText={data.nextText} />
      </div>
    </div>
  );
};

export default Motivv;
