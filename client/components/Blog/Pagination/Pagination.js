import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Post from "./Post";
import Nav from "./Nav";
import { posts } from "../pageContent";

export default function Pagination() {
  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
      <div className="row">
            <Nav/>
      </div>
    </div>
  );
}
