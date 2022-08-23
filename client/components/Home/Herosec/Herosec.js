import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Herosec.module.css';

function HeroSec() {
    const data = [
        {
            id: 1,
            img: "/images/hero_section/brand_development _ball.png",
            hoverImg: "/images/hero_section/brand_development _ball_hover.png",
            wrapperClass: styles.leftImageWrapper,
            imgClass: styles.leftImage,
        },
        {
            id: 2,
            img: "/images/hero_section/VIDEOGRAPHY.png",
            hoverImg: "/images/hero_section/VIDEOGRAPHY_hover.png",
            wrapperClass: styles.middleImageWrapper,
            imgClass: styles.middleImage,
        },
        {
            id: 3,
            img: "/images/hero_section/business_consulting_ball.png",
            hoverImg: "/images/hero_section/business_consulting_ball_hover.png",
            wrapperClass: styles.rightImageWrapper,
            imgClass: styles.rightImage,
        },
    ];

    const [active, setActive] = useState(null);
    return (
        <>
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
            <div className="container-fluid">
                <div className="row">
                    <div className={styles.trampWrapper}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className={styles.tramp}>
                                        <div
                                            onMouseOver={() => setActive(item.id)}
                                            onMouseOut={() => setActive(null)}
                                            className={item.wrapperClass}>
                                            <div
                                                className={item.imgClass}
                                            >
                                                <Image
                                                    src={active === item.id ? item.hoverImg : item.img}
                                                    alt="branding"
                                                    width={154}
                                                    height={154}
                                                />
                                            </div>
                                            <div className={styles.flowImage}>
                                                <Image
                                                    src={'/images/hero_section/flow.png'}
                                                    alt="branding"
                                                    width={406}
                                                    height={446}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSec