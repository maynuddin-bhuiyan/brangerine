import Image from "next/image";
import React from 'react';
import styles from "./FeaturedClients.module.css";

const FeaturedClients = () => {
    const data = [
        {
            id: 1,
            img: "/images/featuredclient/image 485.png",
            width: "189.19",
            height:"42",
        },
        {
            id: 2,
            img: "/images/featuredclient/image 486.png",
            width: "172.13",
            height:"42"
        },
        {
            id: 1,
            img: "/images/featuredclient/image 488.png",
            width: "175",
            height:"42"
        },
        {
            id: 1,
            img: "/images/featuredclient/image 487.png",
            width: "221.05",
            height:"42"
        },
    ]
    return (
        <div className='container'>
            <div className={styles.featuredClients}>
                <h1>FEATURED CLIENTS</h1>
                <div className={styles.imageDiv}>
                    {
                        data.map((item,i) => (
                            <div className={styles.imageContainer} key={item.id}>
                                <Image src={item.img} alt="" width={item.width} height={item.height} className={styles.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedClients;