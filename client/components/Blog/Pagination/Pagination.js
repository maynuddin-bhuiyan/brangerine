import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Post from "./Post";
import Nav from "./Nav";
import { posts } from "../pageContent";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const postMap = {};
  useEffect(() => {
    if (posts.length < 9) {
      setPost(posts);
    } else {
      setPost(posts);
      const numberOfPages = Math.ceil(posts.length / 9);
      setTotalPages(numberOfPages);
      let start = 0;
      let end = 9;
      let pageIndex = 1;
      while (end < posts.length && pageIndex <= numberOfPages) {
        if (start === 0) {
          postMap[pageIndex] = posts.slice(start, end);
          start = end;
          end = start + 9;
          pageIndex += 1;
        } else {
          postMap[pageIndex] = posts.slice(start, end);
          start = end - 1;
          end = start + 9;
          pageIndex += 1;
        }
      }
      if (end > posts.length) {
        end = posts.length;
        postMap[pageIndex] = posts.slice(start + 1, end);
      }
    }
    setPost(postMap);
  }, []);
  const [currPage, setcurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1)

  if(post[page]){
    return (
        <div className={`container ${styles.pagination}`}>
          <div className="row">
            {post[page].map((post) => (
              <Post post={post} />
            ))}
          </div>
          <div className="row">
            <Nav />
          </div>
        </div>
      );
  }else{
    return <div>Loading.....</div>
  }
}
