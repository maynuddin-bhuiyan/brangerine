import React from 'react';
import BlogAuthorCard from '../components/Blog/BlogAuthor/BlogAuthorCard';
import Footer from '../components/shared/Footer/Footer';
import FooterTwo from '../components/shared/FooterTwo/FooterTwo';
import Navbar from '../components/shared/Navbar/Navbar';
import styles from "../styles/Blog.module.css";

const blogAuthor = () => {
    return (
        <div>
        <div className={styles.headerWrapper}>
        <Navbar />
        <div className={styles.blogAuthor_container}>
          <h3>AUTHOR</h3>
          <h1>Jake Flores</h1>
          <BlogAuthorCard />
        </div>
      </div>
        <Footer />
        <FooterTwo />
        </div>
    );
};

export default blogAuthor;