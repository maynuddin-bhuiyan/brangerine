import CaseStudies from "../components/Home/CaseStudies/CaseStudies";
import HeroSec from "../components/Home/HeroSec/HeroSec";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import WorkProcess from "../components/Home/WorkProcess/WorkProcess";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "./../components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <WhatWeDo />
      <CaseStudies />
      <WorkProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}
