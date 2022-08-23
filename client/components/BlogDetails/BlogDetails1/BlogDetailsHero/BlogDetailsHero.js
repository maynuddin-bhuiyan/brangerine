import Image from "next/image";
import React from "react";
import styles from "./BlogDetailsHero.module.css";

const BlogDetailsHero = () => {
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
      id: 1,
      img: "/images/BlogDetails1/FB.svg",
      subTitel: "SPORTS",
      text: "By Dianne Russell",
      data: "October 25, 2022",
      titel: "Like meadowlark while onto this this that dully some far wound",
    },
    {
      id: 2,
      img: "/images/BlogDetails1/FB.svg",
      subTitel: "SPORTS",
      text: "By Dianne Russell",
      data: "October 25, 2022",
      titel: "Literal crud far conservatively perfect classically supreme",
    },
    {
      id: 3,
      img: "/images/BlogDetails1/FB.svg",
      subTitel: "SPORTS",
      text: "By Dianne Russell",
      data: "October 25, 2022",
      titel: "Like meadowlark while onto this this that dully some far wound",
    },
    {
      id: 4,
      img: "/images/BlogDetails1/FB.svg",
      subTitel: "SPORTS",
      text: "By Dianne Russell",
      data: "October 25, 2022",
      titel: "Like meadowlark while onto this this that dully some far wound",
    },
  ];

  return (
    <div className={styles.blogDetailsHero}>
      {/* Blog Details Hero Part  */}
      <div className={styles.blogHeaderText}>
        <h3>BUSINESS ADVICE, ORGANIZING</h3>
        <h1>
          More much randomly tentative this much this sloth cliquishly far
          randomly More
        </h1>
        <div className={styles.blogMedia}>
          <div className={styles.mediaData}>
            <p>By Dianne Russell</p>
            <i className="ri-calendar-2-line"></i>
            <p>October 25, 2022</p>
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
          <div className="col-lg-12 col-sm-12 col-md 12 text-center">
            <Image
              width="950"
              height="520"
              src="/images/BlogDetails1/COVERART+OPENSEA.png"
            />

            {/* Blog Details Information  */}
            <div className={styles.DetailsText}>
              <p>
                Eleifend urna ipsum ornare vitae mauris. In auctor mi arcu
                pulvinar massa. Aliquet egestas ullamcorper integer vulputate
                sodales cursus. Interdum venenatis vestibulum et cum sit turpis
                facilisi tortor adipiscing arcu pulvinar massa. Aliquet egestas
                sodales.
              </p>
              <p>
                Eu nisi mattis neque lectus euismod nulla venenatis congue
                aliquam. Ut duis dignissim nisl, convallis dui. Velit ipsum,
                ullamcorper dictumst amet sed nulla ipsum et. Porta nec nulla
                accumsan in non non ut in. Sem quisque sit sed eget non mollis.
                Feugiat sit semper tellus, id. Mauris sed commodo posuere et.
                Sed accumsan aliquam non ac quisque quis mauris.
              </p>
            </div>

            {/* Blog Details Review*/}
            <div className={styles.DetailsReview}>
              <i className="ri-double-quotes-l"></i>
              <h4>
                “ Wake up to reality! Nothing ever goes as planned in this
                world.”
              </h4>
              <p>By Madara Uchiha</p>
            </div>

            {/* Blog Details Information  */}
            <div className={styles.DetailsText}>
              <p>
                Et mi nullam pulvinar enim massa. In non mattis proin purus ut.
                Tincidunt magna amet, a, nunc. Ut magna accumsan, augue nam in
                pellentesque.{" "}
                <a href="/" target="_blank" rel="noreferrer">
                  Cursus Tristique
                </a>{" "}
                amet, mi aliquet iaculis nunc, lectus blandit libero. Lectus a
                enim urna eget amet ac. Et integer curabitur viverra convallis.
                A at viverra nibh in luctus amet magna aliquet id. Et nulla eu,
                hendrerit faucibus.{" "}
              </p>
              <p>
                est aliquam elementum eget. Tristique risus, platea sapien
                consectetur lacinia arcu, scelerisque{" "}
                <a href="/" target="_blank" rel="noreferrer">
                  Cursus Elementum
                </a>
                . Dolor egestas convallis varius sit pulvinar. Viverra in
                maecenas hendrerit sed feugiat sem sagittis. Iaculis ullamcorper
                amet nunc, dictum amet. Elit libero pulvinar posuere vitae.
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
            <div className={styles.RelatedPosts}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHero;
