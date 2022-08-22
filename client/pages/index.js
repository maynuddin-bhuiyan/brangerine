import HeroSec from '../components/Home/HeroSec/HeroSec';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import WorkProcess from '../components/Home/WorkProcess/WorkProcess';
import Footer from '../components/shared/Footer/Footer';
import Navbar from './../components/shared/Navbar/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Navbar />
        <HeroSec />
      </div>
      <WorkProcess />
      <Testimonials />
      <Footer />
    </div>
  )
}
