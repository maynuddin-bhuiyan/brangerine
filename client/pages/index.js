import Footer from '../components/shared/Footer/Footer';
import styles from '../styles/Home.module.css'
import HeroSec from '../components/Home/HeroSec/HeroSec';
import Navbar from './../components/shared/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Footer />
    </div>
  )
}
