import React from "react";
import AboutUsHero from "../components/AboutUs/AboutUsHero/AboutUsHero";
import Faq from "../components/AboutUs/Faq/Faq";
import Partners from "../components/AboutUs/Partners/Partners";
import Team from "../components/AboutUs/Team/Team";
import FeaturedClients from "../components/Home/FeaturedClients/FeaturedClients";
import Footer from "../components/shared/Footer/Footer";
import FooterTwo from "../components/shared/FooterTwo/FooterTwo";
import Navbar from "../components/shared/Navbar/Navbar";

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutUsHero />
      <FeaturedClients />
      <Team />
      <Partners />
      <Faq />
      <Footer />
      <FooterTwo />
    </div>
  );
};

export default about;
