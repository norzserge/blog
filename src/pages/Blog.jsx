import React, { useState, useEffect } from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import styles from "./Blog.module.scss";
import firebase from "../firebase";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [sortNew, setSort] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("posts");
      /*
       ** Можно использововать .get() и onSnapShot().
       ** Первый вариант позволяет получить содержимое один раз. Второй вариант позволяет "слушать" документ и обновлять содрежимое при изменении документа.
       */
      data.onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          date: doc.date,
          ...doc.data(),
        }));

        if (sortNew) {
          // сортировка (сначала новые сообщения)
          newPosts.sort((a, b) => {
            return new Date(b.date.seconds) - new Date(a.date.seconds);
          });
        } else {
          // сортировка (сначала старые сообщения)
          newPosts.sort((a, b) => {
            return new Date(a.date.seconds) - new Date(b.date.seconds);
          });
        }

        setPosts(newPosts);
      });
    };
    fetchData();

    // очистка подписки
    return () => fetchData();
  }, [sortNew]); // <<-- sortNew в массиве является триггером, при изменении которого происходит перерисовка

  const sort = () => {
    setSort(!sortNew);
  };

  return (
    <div className={styles.blog}>
      <AddNewPost />
      <button onClick={sort}>Sort</button>
      <ul className={styles["blog-list"]}>
        {posts.map((post, index) => (
          <li key={index} className={styles["blog-item"]}>
            <PostPreview
              name={post.name}
              date={post.date.seconds}
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
