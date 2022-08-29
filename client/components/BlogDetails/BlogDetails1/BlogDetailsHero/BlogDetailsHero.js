import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./BlogDetailsHero.module.css";

const BlogDetailsHero = ({ details }) => {
  // Blog Details Social Media Data
  const data = [
    { id: 1, img: "/images/BlogDetails1/FB.svg" },
    { id: 2, img: "/images/BlogDetails1/tw.svg" },
    { id: 3, img: "/images/BlogDetails1/IG.svg" },
    { id: 4, img: "/images/BlogDetails1/pin.svg" },
    { id: 5, img: "/images/BlogDetails1/teli.svg" },
    { id: 6, img: "/images/BlogDetails1/mail.svg" },
    { id: 7, img: "/images/BlogDetails1/What'sapp.svg" },
  ];

  //Blog Details Related Posts
  const postsData = [
    {
      id: 7,
      img: "/images/BlogDetails1/pexels-photo-25876.jpg",
      subTitel: "SPORTS",
      text: "Jake Flores",
      data: "October 25, 2022",
      titel: "Like meadowlark while onto this this that dully some far wound",
      href: '/blog-details',
    },
    {
      id: 5,
      img: "/images/BlogDetails1/pexels-photo-57825.jpeg",
      subTitel: "SPORTS",
      text: "Sam Tavarez",
      data: "October 25, 2022",
      titel: "Literal crud far conservatively perfect classically supreme",
      href: '/blog-details',
    },
  ];

  return (
    <div className={styles.blogDetailsHero}>
      {/* Blog Details Hero Part  */}
      <div className={styles.blogHeaderText}>
        <h3>{details?.subtitle}</h3>
        <h1>
          {details?.title}
        </h1>
        <div className={styles.blogMedia}>
          <div className={styles.mediaData}>
            <Link href={`/blog/author/${details?.author}`}><p>{details?.author}</p></Link>
            <i className="ri-calendar-2-line"></i>
            <p>{details?.date}</p>
          </div>
          <div className={styles.mediaButton}>
            <button>
              <a href="/" target="_blank" rel="noreferrer">
                <i className="ri-share-forward-fill"></i>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Blog Details Main Image  */}
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 text-center">
            <Image
              width="950"
              height="520"
              src={details?.src}
            />

            {/* Blog Details Information  */}
            <div className={styles.DetailsText}>
              <p>
                {details?.text1}
              </p>
              <p>
                {details?.text2}
              </p>
            </div>

            {/* Blog Details Review
            <div className={styles.DetailsReview}>
              <i className="ri-double-quotes-l"></i>
              <h4>
                “ Wake up to reality! Nothing ever goes as planned in this
                world.”
              </h4>
              <p>By Madara Uchiha</p>
            </div> */}

            {/* Blog Details Information  */}
            <div className={styles.DetailsText}>
              <p>
                {details?.text3}
              </p>
              <p>
                {details?.text4}
              </p>
            </div>

            {/* Blog Details Tags */}
            <div className={styles.DetailsTags}>
              <ul>
                <div className={styles.TagsHeader}>
                  <i className="ri-hashtag"></i>
                  <h3>Tags:</h3>
                </div>
                <li className={styles.TagLink}>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className={styles.TagItem}
                  >
                    News
                  </a>
                </li>
                <li className={styles.TagLink}>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className={styles.TagItem}
                  >
                    Sports
                  </a>
                </li>
                <li className={styles.TagLink}>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className={styles.TagItem}
                  >
                    Fashion
                  </a>
                </li>
              </ul>
            </div>

            {/* Blog Details Social Media */}
            <div className={styles.SocialMedia}>
              <h2>Share Article</h2>
              <div className={styles.SocialIcon}>
                {data?.map((icon, i) => (
                  <div className={styles.Icon} key={icon?.id}>
                    <Image width="42" height="42" src={icon?.img} />
                  </div>
                ))}
              </div>

              <div className={styles.BlogLink}>
                <p>https://www.brangerine.com/blog/2019/5/3/evernote-for-</p>
                <i className="ri-file-copy-2-line"></i>
              </div>
            </div>

            {/* Blog Details Related Posts */}
            <div className={styles.RelatedPosts}>
              <h2>Related Posts</h2>
              <div className={styles.PostsCard}>
                {postsData?.map((post, i) => (
                  <Link href={`${post.href}/${post.id}`} passHref>
                    <div className={styles.Icon} key={post?.id}>
                      <Image width="360" height="195" src={post?.img} />
                      <h3>{post?.subTitel}</h3>
                      <h1>{post?.titel}</h1>
                      <div className={styles.mediaData}>
                        <p>{post?.text}</p>
                        <i className="ri-calendar-2-line"></i>
                        <p>{post?.data}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHero;
