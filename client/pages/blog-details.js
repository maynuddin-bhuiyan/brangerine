import BlogComments from "../components/BlogDetails/BlogDetails1/BlogComments/BlogComments";
import BlogDetailsHero from "../components/BlogDetails/BlogDetails1/BlogDetailsHero/BlogDetailsHero";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";


export default function blogDetails1() {
  return (
    <div>
      <Navbar />
      <BlogDetailsHero />
      <BlogComments />
      <Footer />
    </div>
  );
}
