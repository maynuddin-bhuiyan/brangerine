import React from "react";
import { posts } from "../pageContent";
import Post from "../Pagination/Post";
import styles from "./BlogAuthorCard.module.css";

const BlogAuthorCard = ({ authorPosts }) => {
  return (
    <div className={`container ${styles.blogAuthorCard}`}>
      <div className="row">
        <div className={`${styles.authorCard}`}>
          {authorPosts?.map((details) => (
            <Post
              id={details.id}
              post={details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorCard;
