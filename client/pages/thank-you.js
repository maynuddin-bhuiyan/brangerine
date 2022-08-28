import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../components/shared/Footer/Footer";
import FooterTwo from "../components/shared/FooterTwo/FooterTwo";
import Navbar from "./../components/shared/Navbar/Navbar";

const ThankYou = () => {
  return (
    <div>
      <Head>
        <title>Thank You </title>
      </Head>
      <Navbar />
      <div className="container">
              <div className="thank">
                  <Image src="/images/undraw_mailbox_re_dvds (2).svg" width={300} height={300} />
        <h1 className="">Thank You</h1>
        <p className="">We will get back to you as soon as possible.</p>
        </div>
      </div>
      <Footer />
      <FooterTwo />
    </div>
  );
};

export default ThankYou;
