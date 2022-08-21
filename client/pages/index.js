import Footer from '../components/shared/Footer/Footer';
import styles from '../styles/Home.module.css'
import Herosec from './../components/Home/Herosec/Herosec';
import Navbar from './../components/shared/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Footer />
    </div>
  )
}
