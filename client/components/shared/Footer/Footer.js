import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          <Image
            src="/images/Brand_Logo.svg"
            alt="brand-logo"
            width={234.13}
            height={46.47}
          />
          <h5>Subscribe</h5>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className={styles.inputDiv}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        <div className={styles.footerInfos}>
          <div className={styles.footerLinks}>
            <a href="/">Home</a>
            <a href="/">Service</a>
            <a href="/case-studies">Our work</a>
            <a href="/blog">Article</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact us</a>
          </div>
          <div className={styles.footerAddress}>
            <h5>Address:</h5>
            <p className={styles.footerAddressP1}>Bakersfield, CA 93313</p>
            <h5>Contact:</h5>
            <p className={styles.footerAddressP2}>661.431.5675 </p>
            <p className={styles.footerAddressP3}>jake@brangerine.com</p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/brangerine">
                {" "}
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/brangerine/">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/brangerine">
                {" "}
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://www.linkedin.com/company/brangerine/">
                {" "}
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
