import Image from "next/image";
import React from "react";
import Comments from "../Comments/Comments";
import NextPrevious from "../NextPrevious/NextPrevious";
import styles from "./RileyZavala.module.css";
import RileyZavalaSlider from "./RileyZavalaSlider";

const RileyZavala = () => {
  const data = {
    image1: "/images/CaseStudies/motiv.png",
    image2: "/images/CaseStudies/mac.png",
    preLink: "/cs-motivv",
    nextLink: "/cs-macg",
    preText: "Motivv - Fitness Apparel",
    nextText: "Mac G - The Barber",
    comment: "The design absolutely blew me away. I already knew I was going to enjoy the end product, but it truly captured the ideas of the music on the project in a way I could have never imagined.",
    commentator: "— Riley Zavala"
  };
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
        <p>
          Riley is a local recording artist in Bakersfield. His first EP titled
          "Chasing Ghosts" features art inspired by classic the 32bit games of
          the 90's. Pixelated in Photoshop we began with sketches of Riley as
          simplified and retro as possible. We visioned the character as a
          modern link wielding a guitar around chasing ghosts, a metaphor for
          content in the album. You can stream Chasing Ghosts on{" "}
          <a href="https://soundcloud.com/zavala_music"> Sound Cloud.</a>{" "}
        </p>
        <RileyZavalaSlider />
        <Comments comment={data.comment} commentator={data.commentator}/>
        <NextPrevious
          image1={data.image1}
          image2={data.image2}
          preLink={data.preLink}
          nextLink={data.nextLink}
          preText={data.preText}
          nextText={data.nextText}
        />
      </div>
    </div>
  );
};

export default RileyZavala;
