import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active me-5 ${styles.navItem}`} aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navBtn}`} aria-current="page" href="#">Contact Us <i className="ri-arrow-right-line"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar