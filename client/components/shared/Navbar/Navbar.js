import Image from 'next/image';
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={'/images/Brand_Logo.svg'}
                            width={200}
                            height={50}
                        />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Service</a>
                        </li>
                        <Link href='/case-studies'>
                            <li className="nav-item">
                                <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Our Work</a>
                            </li>
                        </Link>
                        <Link href='/blog'>
                            <li className="nav-item">
                                <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Articles</a>
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li className="nav-item">
                                <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">About Us</a>
                            </li>
                        </Link>
                        <Link href='/contact'>
                            <li className="nav-item">
                                <a className={`nav-link active ${styles.navBtn}`} aria-current="page" href="#">Contact Us <i className="ri-arrow-right-line"></i></a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar