import React from 'react';
import styles from "./FooterTwo.module.css";

const FooterTwo = () => {
    return (
        <div className='container'>
            <div className={styles.footerTwo}>
                <h1>2021 Relume. All right reserved.</h1>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default FooterTwo;