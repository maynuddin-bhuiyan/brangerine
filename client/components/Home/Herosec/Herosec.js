import React from 'react'
import styles from './HeroSec.module.css';

function HeroSec() {
    return (
        <div className='container'>
            <div className="row">
                <div className={styles.heroSecTextWrapper}>
                    <h1 className="text-center">
                        Branding <br /> Made Simple
                    </h1>
                    <p>
                        We create more than just logos and websites. We craft lush imagery, and bring imaginations to reality. We parter with companies to bring clarity to their brands purpose. Successful companies have strong, healthy foundations; rooted deeply within customer experiences.
                    </p>
                    <div>
                        <button className={`btn ${styles.btnDiscuss}`}>
                            <i className="ri-message-3-fill me-2"></i>
                            Discuss a project with Us
                            {/* <i className="ri-arrow-right-up-line"></i> */}
                        </button>
                        <button className={`btn ${styles.btnAbout}`}>About us</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSec