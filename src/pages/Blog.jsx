import React from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import styles from "./Blog.module.scss";

const Blog = (props) => {
  return (
    <div className={styles.blog}>
      <AddNewPost />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </div>
  );
};

export default Blog;
