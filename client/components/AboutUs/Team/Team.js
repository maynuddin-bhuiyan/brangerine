import Image from "next/image";
import React from "react";
import styles from "./Team.module.css";

const Team = () => {
  const data = [
    {
      id: 1,
      image: "/images/about us/Rectangle 460.jpg",
      name: "Jacob Flores",
      designation: "Co-Founder, Art Director",
      instagram: "https://www.instagram.com/jake.flores/",
      linkedin: "https://www.linkedin.com/in/jacob-flores-2534958a/",
      email: "jflores@brangerine.com <jflores@brangerine.com",
    },
    {
      id: 2,
      image: "/images/about us/Rectangle 461.jpg",
      name: "Sam Tavarez",
      designation: "Co-Founder, Sales Director",
      instagram: "https://www.instagram.com/_salt_and_light_/",
      linkedin: "https://www.linkedin.com/in/samrtavarez/",
      email: "stavarez@brangerine.com <stavarez@brangerine.com",
    },
    {
      id: 3,
      image: "/images/about us/Rectangle 462.jpg",
      name: "Rene Rodarte",
      designation: "Business Consultant",
      instagram: "https://www.instagram.com/brangerine/",
      linkedin: "https://www.linkedin.com/in/rene-rodarte-13b26969/",
      email: "rrodarte@brangerine.com",
    },
  ];
  return (
    <div className={styles.ourTeamMain}>
      <div className="container">
        <div className={styles.ourTeam}>
          <h5>Our Team</h5>
          <h1>
            In what area do you
            <br /> need assistance
          </h1>
          <div className={`row ${styles.teamMembers}`}>
            {data.map((item, index) => (
              <div
                className={`col-lg-4 col-md-6 col-sm-12  ${styles.teamMemberCard}`}
              >
                <Image
                  src={item.image}
                  width={354}
                  height={404}
                  className={styles.memberImage}
                />
                <div className={styles.teamMemberCardInfo}>
                  <h4>{item.name}</h4>
                  <p>{item.designation}</p>
                  <div className={styles.socials}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
