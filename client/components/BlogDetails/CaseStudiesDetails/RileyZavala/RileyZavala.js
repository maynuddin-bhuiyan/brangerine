import Image from "next/image";
import React from "react";
import styles from "./RileyZavala.module.css";
import RileyZavalaSlider from "./RileyZavalaSlider";

const RileyZavala = () => {
  return (
    <div className="container">
      <div className={styles.rileyZavala}>
        <h4>Branding,web project</h4>
              <h1>Riley Zavala - INDEPENDENT ARTIST</h1>
              <h2>Chasing Ghosts EP</h2>
              <Image
            src="/images/CaseStudies/project 5/chasing_ghosts.png"
            width={956}
            height={625}
              />
              <h2>Album Art</h2>
              <p>Riley is a local recording artist in Bakersfield.  His first EP titled "Chasing Ghosts" features art inspired by classic the 32bit games of the 90's.  Pixelated in Photoshop we began with sketches of Riley as simplified and retro as possible.  We visioned the character as a modern link wielding a guitar around chasing ghosts, a metaphor for content in the album.  You can stream Chasing Ghosts on <a href="https://soundcloud.com/zavala_music"> Sound Cloud.</a> </p>
              <RileyZavalaSlider/>
      </div>
    </div>
  );
};

export default RileyZavala;
