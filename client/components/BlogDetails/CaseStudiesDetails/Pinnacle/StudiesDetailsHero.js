import Image from "next/image";
import React from "react";
import styles from "./StudiesDetailsHero.module.css";

const StudiesDetailsHero = () => {
  //Case Studies Details Information Data
  const infoData = [
    {
      id: 1,
      img: "/images/CaseStudies/Rectangle 44.png",
      titel: "BUSINESS COLLATERAL",
    },

    {
      id: 2,
      img: "/images/CaseStudies/Rectangle 45.png",
      titel: "WEB DESIGN",
    },

    {
      id: 3,
      img: "/images/CaseStudies/Rectangle 46.png",
      titel: "Pinnacle Logo",
    },
  ];

  //Case Studies view  Information Data
  const viewData = [
    {
      id: 1,
      img: "/images/CaseStudies/Rectangle 47.png",
    },

    {
      id: 2,
      img: "/images/CaseStudies/Rectangle 48.png",
    },
  ];

  return (
    <div className={styles.StudiesDetailsHero}>
      {/* Case Studies Details Hero Part  */}
      <div className={styles.CasesHeaderText}>
        <h3>Branding, web project</h3>
        <h1>Pinnacle Rise to the top</h1>
      </div>

      {/* Case Studies Details Main Image  */}
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 text-center">
            <Image
              width="946"
              height="518"
              src="/images/CaseStudies/Component 2.jpg"
            />

            {/* Case Studies Details Information  */}

            <div className={styles.DetailsInformation}>
              <h2>Pinnacle symbol</h2>
              <p>
                The symbol has movement from the left to the right with the
                circle surrounding the mountains & sun. The symbol is bold and
                easily represents a landscape while also appearing to the viewer
                as a scene they might see while on top of a cliff watching the
                sunset.
              </p>
            </div>

            {/* Details Information More */}
            <div className={styles.InformationMore}>
              {infoData?.map((Info, i) => (
                <div className={styles.InfoDetails} key={Info?.id}>
                  <Image width="750" height="470" src={Info?.img} />
                  <h2>{Info?.titel}</h2>
                </div>
              ))}
            </div>

            {/* Details Information More */}
            <div className={styles.DetailsInformation}>
              <p>
                The symbol has movement from the left to the right with the
                circle surrounding the mountains & sun. The symbol is bold and
                easily represents a landscape while also appearing to the viewer
                as a scene they might see while on top of a cliff watching the
                sunset.
              </p>
            </div>

            {/* Details ViewInfo  */}
            <div className={styles.ViewInfo}>
              {viewData?.map((View, i) => (
                <div className={styles.ViewInfoDetails} key={View?.id}>
                  <Image width="360" height="230" src={View?.img} />
                </div>
              ))}
            </div>

            {/* Details project  */}
            <div className={styles.projectInfo}>
              <div className={styles.projectcard}>
                <div className={styles.projectImg}>
                  <Image
                    width="80"
                    height="80"
                    src="/images/CaseStudies/image-asset.png"
                  />
                </div>
                <div className={styles.projectText}>
                  <div className={styles.projectLogo}>
                    <Image
                      width="30"
                      height="20"
                      src="/images/CaseStudies/arrow left.svg"
                    />
                    <a href="/" target="_blank" rel="noreferrer">
                      Previous project
                    </a>
                  </div>
                  <p>Tesla car crashes into tourist bus in Germany</p>
                </div>
              </div>

              <div className={styles.projectcard}>
                <div className={styles.projectImg}>
                  <Image
                    width="80"
                    height="80"
                    src="/images/CaseStudies/Component 2.jpg"
                  />
                </div>
                <div className={styles.projectText}>
                  <div className={styles.projectLogo}>
                    <a href="/" target="_blank" rel="noreferrer">
                      Next project
                    </a>
                    <Image
                      width="30"
                      height="20"
                      src="/images/CaseStudies/arrow right.svg"
                    />
                  </div>
                  <p>More much randomly tentative this much this...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesDetailsHero;
