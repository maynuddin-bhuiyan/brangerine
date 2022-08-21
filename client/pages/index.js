import WhatWeDo from '../components/Home/AreaAssistance/WhatWeDo';
import HeroSec from '../components/Home/HeroSec/HeroSec';
import Footer from '../components/shared/Footer/Footer';
import Navbar from './../components/shared/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <WhatWeDo />
      <Footer />
    </div>
  )
}
