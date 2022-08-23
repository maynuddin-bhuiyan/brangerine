import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./AboutUsHero.module.css";

const AboutUsHero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.aboutUsHeroMain}>
      <div className={styles.abstractRight}></div>
            <div className={styles.abstractLeft}></div>
      <div className="container">
      <div className={styles.aboutUsHero}>
        <h5>About us</h5>
        <h1>
          Our Story <br /> is our passion
        </h1>
        <div className={styles.aboutUsHeroImg}>
          <div className={styles.aboutUsHeroImg1}>
            <Image
              src="/images/about us/left.png"
              width={461}
              height={406}
              data-aos="fade-up-right"
            />
          </div>
          <div className={styles.aboutUsHeroImg2}>
            <Image
              src="/images/about us/right.png"
              width={461}
              height={406}
              data-aos="fade-up-left"
            />
          </div>
        </div>
        <div className={styles.aboutUsHeroInfo}>
          <h4>
            Founded in 2016 Brangerine is a collective of creatives &
            entrepreneurs with a common goal of helping businesses succeed
            through effective design & branding.
          </h4>
          <p>
            Brangerine was founded by Jacob Flores & Sam Tavarez two
            entrepreneurs with experience in Sales, Business Development,
            Marketing & Design. What started out as an idea to bring solid
            content for niche of businesses looking for help in the ever
            changing corporate world. Since launching we have put together a
            team of professionals capable of completely rebranding a business
            from the ground up. The market today vastly favors companies that
            utilize social media, establish an online presence, and have modern
            aesthetics. Therefore Brangerine was founded, a design firm, ready
            to evolve any business to thrive in the modern era we live today.
            Team work makes the dream work, let's collabarate & live the dream
            together!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsHero;
