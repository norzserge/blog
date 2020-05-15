import React, { useState, useEffect } from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import styles from "./Blog.module.scss";
import firebase from "../firebase";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("posts").get();
      setPosts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.blog}>
      <AddNewPost />
      <ul className={styles["blog-list"]}>
        {posts.map((post, index) => (
          <li key={index} className={styles["blog-item"]}>
            <PostPreview
              name={post.name}
              date={post.date}
              header={post.header}
              text={post.text}
              id={post.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
