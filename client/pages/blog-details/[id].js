import { posts } from "../../components/Blog/pageContent";
import BlogComments from "../../components/BlogDetails/BlogDetails1/BlogComments/BlogComments";
import BlogDetailsHero from "../../components/BlogDetails/BlogDetails1/BlogDetailsHero/BlogDetailsHero";
import Footer from "../../components/shared/Footer/Footer";
import FooterTwo from "../../components/shared/FooterTwo/FooterTwo";
import Navbar from "../../components/shared/Navbar/Navbar";

export default function blogDetails1({details}) {
  return (
    <div>
      <Navbar />
      <BlogDetailsHero details={details} />
      <BlogComments />
      <Footer />
      <FooterTwo />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: posts.map(post => {
      const id = post.id.toString()
      console.log(id)
      return {
        params: {
          id
        }
      }
    }),
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const details = posts.find(post => post.id === Number(params.id))
  return {
    props: {
      details
    }
  }
}

