import HeroSec from '../components/Home/HeroSec/HeroSec';
import WorkProcess from '../components/Home/WorkProcess/WorkProcess';
import Footer from '../components/shared/Footer/Footer';
import Navbar from './../components/shared/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <WorkProcess/>
      <Footer />
    </div>
  )
}
