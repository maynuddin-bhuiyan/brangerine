import FeaturedClients from '../components/Home/FeaturedClients/FeaturedClients';
import HeroSec from '../components/Home/Herosec/Herosec';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import WorkProcess from '../components/Home/WorkProcess/WorkProcess';
import Footer from '../components/shared/Footer/Footer';
import styles from '../styles/Home.module.css';
import Navbar from './../components/shared/Navbar/Navbar';

export default function Home() {
  return (
    <div>
     <div className={styles.headerWrapper}>
        <Navbar />
        <HeroSec />
      </div>
      <FeaturedClients/>
      <WorkProcess />
      <Testimonials />
      <Footer />
    </div>
  )
}
