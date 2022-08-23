import React from 'react';
import styles from "./ContactHero.module.css";

const ContactHero = () => {
    const data = [
        {
            id: 1,
            icon: "/images/contact us/sms-notification.svg",
            title: "Our Mails",
            text:"hello@brangerine.com"
        },
         {
            id: 2,
            icon: "/images/contact us/call-calling.svg",
            title: "Our Phones",
            text:"661.378.3162 "
        },
          {
            id: 3,
            icon: "/images/contact us/location.svg",
            title: "Our Address",
            text:"Bakersfield, CA 93313"
        },
    ]
    return (
        <div className={styles.contactHeroMain}>
             <div className={styles.abstractRight}></div>
            <div className={styles.abstractLeft}></div>
            <div className='container'>
            <div className={styles.contactHero}> 
                <h5>Contact Us</h5>
                <h1>Request an <br /> Appointment</h1>
                <p>We would like to know more about the needs of your business.  Please fill out the form below and let's grow together</p>
                <div className={styles.contactInfo}>
                    {
                        data.map((item,i) => (
                            <div className={styles.contactCard}>
                                <img src={item.icon} alt="" />
                                <div className={styles.contactText}>
                                    <h5>{ item.title}</h5>
                                    <p>{ item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactHero;