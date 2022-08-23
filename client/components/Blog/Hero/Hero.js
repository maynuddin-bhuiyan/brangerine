import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <p className={styles.title}>Branding & Business Articles</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <p className={styles.desc}>
            Recycled information and tips from people that recycled them from
            someone else, enjoy!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
