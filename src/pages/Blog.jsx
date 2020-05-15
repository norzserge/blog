import React, { useState, useEffect } from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import styles from "./Blog.module.scss";
import firebase from "../firebase";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(newPosts);
      });

    return () => unsuscribe();
  }, []);

  return posts;
}

const Blog = (props) => {
  const posts = usePosts();

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
