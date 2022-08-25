import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./Post.module.css";
import Link from "next/link";

export default function Post({ post }) {
  const { category, title, date, author, src, href,id } = post;
  return (
    <Col md={4} sm={6} xs={12}>
      <div className={styles.post_container}>
        <Image
          src={src}
          alt="photo"
          width={360}
          height={197}
        />
        <div className={styles.category}>{category}</div>
        <Link href={`${href}/${id}`}>
          <div className={styles.title}>{title}</div>
        </Link>
        <div className={styles.others}>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </Col>
  );
}
