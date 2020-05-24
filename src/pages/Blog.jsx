import React, { useState, useEffect } from "react";
import AddNewPost from "../components/AddNewPost";
import PostPreview from "../components/PostPreview";
import Alert from "../components/uikit/Alert";
import Sort from "../components/Sort";
import styles from "./Blog.module.scss";
import firebase from "../firebase";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [sortNewFirst, setSort] = useState(true);

  useEffect(() => {
    let cleanupFunction = false;

    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("posts");
      /*
       ** Можно использововать .get() и onSnapShot().
       ** Первый вариант позволяет получить содержимое один раз.
       ** Второй вариант позволяет "слушать" документ и обновлять содержимое при изменении документа.
       */
      data.onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          date: doc.date,
          ...doc.data(),
        }));
        if (sortNewFirst) {
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
        /*
         ** непосредственное обновление состояния при условии, что компонент не размонтирован
         ** https://habr.com/ru/post/493496/ (подробное описание ошибки, связанной с утечкой памяти)
         */
        if (!cleanupFunction) setPosts(newPosts);
      });
    };
    fetchData();

    // функция очистки useEffect
    return () => (cleanupFunction = true);
  }, [sortNewFirst]); // <<-- sortNew в массиве является триггером, при изменении которого происходит перерисовка, а [] эмулирует хук ComponentDidMount (HTML шаблон готов для дальнейшей работы)

  const sort = () => {
    setSort(!sortNewFirst);
  };

  return (
    <div className={styles.blog}>
      <Alert status="primary">
        Данный блог является учебным проектом и не претендует на статус
        полноценного приложения. Кодовая база расположена на GitHub по{" "}
        <a href="https://github.com/norzserge/blog" target="_blank">
          ссылке
        </a>
      </Alert>
      <AddNewPost />
      <Sort isSort={sortNewFirst} onSort={sort} />
      <ul className={styles["blog-list"]}>
        {posts.map((post, index) => (
          /*
           ** В качестве key лучше использовать ID записи (props.id), а не index.
           ** Иначе возникает баг удаления следующей записи за удаленной.
           */
          <li key={post.id} className={styles["blog-item"]}>
            <PostPreview
              name={post.name}
              date={post.date.seconds}
              header={post.header}
              text={post.text}
              id={post.id}
              img={post.selectedOption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
