import CaseStudies from "../components/Home/CaseStudies/CaseStudies";
import FeaturedClients from "../components/Home/FeaturedClients/FeaturedClients";
import HeroSec from "../components/Home/HeroSec/HeroSec";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import WorkProcess from "../components/Home/WorkProcess/WorkProcess";
import Footer from "../components/shared/Footer/Footer";
import FooterTwo from "../components/shared/FooterTwo/FooterTwo";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/shared/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Navbar />
        <HeroSec />
      </div>
      <FeaturedClients />
      <WhatWeDo />
      <CaseStudies />     
      <WorkProcess />
      <Testimonials />
      <Footer />
      <FooterTwo />
    </div>
  );
}
