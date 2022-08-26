import React from 'react';
import BlogAuthorCard from '../../../components/Blog/BlogAuthor/BlogAuthorCard';
import { posts } from '../../../components/Blog/pageContent';
import Footer from '../../../components/shared/Footer/Footer';
import FooterTwo from '../../../components/shared/FooterTwo/FooterTwo';
import Navbar from '../../../components/shared/Navbar/Navbar';
import styles from "../../../styles/Blog.module.css";

const author = ({ authorPosts, author }) => {
  console.log(authorPosts, author);
  return (
    <div>
      <div className={styles.headerWrapper}>
        <Navbar />
        <div className={styles.blogAuthor_container}>
          <h3>AUTHOR</h3>
          <h1>{author}</h1>
          <BlogAuthorCard authorPosts={authorPosts} />
        </div>
      </div>
      <Footer />
      <FooterTwo />
    </div>
  );
};

export default author;



export async function getStaticPaths() {
  return {
    paths: posts.map(post => {
      const author = post.author
      console.log(author)
      return {
        params: {
          author
        }
      }
    }),
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const authorPosts = posts.filter(post => post.author === params.author)
  return {
    props: {
      authorPosts,
      author: params.author
    }
  }
}