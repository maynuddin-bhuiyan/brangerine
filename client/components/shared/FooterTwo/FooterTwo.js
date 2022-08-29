import Link from 'next/link';
import React from 'react';
import styles from "./FooterTwo.module.css";

const FooterTwo = () => {
    return (
        <div className='container'>
            <div className={styles.footerTwo}>
                <h1>© 2017 Brangerine. All rights reserved || Developed by <Link href="https://apexdv.com/"><a target="_blank" rel="noopener noreferrer">ApexDv</a></Link></h1>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default FooterTwo;