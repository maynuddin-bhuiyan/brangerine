import CaseStudies from "../components/Home/CaseStudies/CaseStudies";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import WorkProcess from "../components/Home/WorkProcess/WorkProcess";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "./../components/shared/Navbar/Navbar";

import HeroSec from "../components/Home/HeroSec/HeroSec";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Navbar />
        <HeroSec />
      </div>
      <WhatWeDo />
      <CaseStudies />
      <WorkProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}
