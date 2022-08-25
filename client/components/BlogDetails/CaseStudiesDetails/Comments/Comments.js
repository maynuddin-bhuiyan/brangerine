import Image from "next/image";
import React from 'react';
import styles from "./Comments.module.css";

const Comments = ({comment, commentator}) => {
    return (
        <div className={styles.comments}>
            <Image src="/images/CaseStudies/quote.svg" width={31.2} height={23.93} />
            <h1>"{comment}"</h1>
            <p>{ commentator}</p>
        </div>
    );
};

export default Comments;