import Footer from "../components/shared/Footer/Footer";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/shared/Navbar/Navbar";
import Hero from "../components/Blog/Hero/Hero";
import Pagination from "../components/Blog/Pagination/Pagination";

export default function Blog() {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Navbar />
        <div className={styles.blog_container}>
          <Hero />
        </div>
      </div>
      <Pagination/>
      <Footer />
    </div>
  );
}
