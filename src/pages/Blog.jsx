import React, { useState, useEffect } from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import styles from "./Blog.module.scss";
import firebase from "../firebase";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const unsuscribe = firebase
    //   .firestore()
    //   .collection("posts")
    //   .onSnapshot((snapshot) => {
    //     const newPosts = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));

    //     setPosts(newPosts);
    //   });

    // return () => unsuscribe();
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("posts").get();
      setPosts(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.blog}>
      <AddNewPost />
      <ul className={styles["blog-list"]}>
        {posts.map((post) => (
          <li key={post.id} className={styles["blog-item"]}>
            <PostPreview
              name={post.name}
              date={post.date}
              header={post.header}
              text={post.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
