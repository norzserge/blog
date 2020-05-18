import React, { useState } from "react";
import Button from "./uikit/Button";
import Textfield from "./uikit/Textfield";
import Textarea from "./uikit/Textarea";
import styles from "./AddNewPost.module.scss";
import firebase from "../firebase";

const AddNewPost = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();
    db.collection("posts")
      .add({
        name,
        date,
        header,
        text,
      })
      .then(() => {
        setName("");
        setDate("");
        setHeader("");
        setText("");
      });

    // const postDate = new Date().toLocaleDateString();
    // setDate(postDate);
  }

  return (
    <form className={styles["add-post"]} onSubmit={onSubmit}>
      <div className={styles.control}>
        <Textfield
          placeholder="Ваше имя"
          label="Имя"
          value={name}
          onChangeProp={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <div className={styles.control}>
        <Textfield
          placeholder="Тема"
          label="Заголовок"
          value={header}
          onChangeProp={(e) => setHeader(e.currentTarget.value)}
        />
      </div>
      <div className={styles.control}>
        <Textarea
          placeholder="Введите сообщение"
          label="Сообщение"
          rowNum={5}
          value={text}
          onChangeProp={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <div className={styles.control}>
        <Button text="Отправить" type="primary" />
      </div>
    </form>
  );
};

export default AddNewPost;
