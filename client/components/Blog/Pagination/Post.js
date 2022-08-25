import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Post.module.css";

export default function Post({ post }) {
  const { category, title, date, author, src, href,id } = post;
  return (
    <Col md={4} sm={6} xs={12}>
       <Link href={`${href}/${id}`}>
      <div className={styles.post_container}>
        <Image
          src={src}
          alt="photo"
          width={331}
          height={228}
        />
        <div className={styles.category}>{category}</div>
       
          <div className={styles.title}>{title}</div>
       
        <div className={styles.others}>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      </Link>
    </Col>
  );
}
