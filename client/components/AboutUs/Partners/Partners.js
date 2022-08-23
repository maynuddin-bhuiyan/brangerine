import React from "react";
import styles from "./Partners.module.css";

const Partners = () => {
  const data = [
    {
      id: 1,
      name: "Gilbert Flores",
      designation: "Drone Cinematographer",
      instagram: "#",
      linkedin: "#",
      email: "#",
    },
    {
      id: 2,
      name: "Julieta Torres",
      designation: "Makeup Artist",
      instagram: "#",
      linkedin: "#",
      email: "#",
    },
    {
      id: 3,
      name: "Jordan Archie",
      designation: "Videographer & Animator",
      instagram: "#",
      linkedin: "#",
      email: "#",
    },
  ];
  return (
    <div className="container">
      <div className={styles.partners}>
        <h1>Associates & Partners</h1>
              <div className={`row ${ styles.partnersCard }`}>
          {data.map((item, index) => (
              <div className={`col-lg-4 col-md-6 col-sm-12 ${styles.partnersCardInfo}`}>
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
                <div className={styles.socialsIcons}>
                  <a href={item.instagram}>
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href={item.linkedin}>
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                  <a href={item.email}>
                    <i class="ri-mail-fill"></i>
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
