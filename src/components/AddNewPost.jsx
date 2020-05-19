import React, { useState } from "react";
import Button from "./uikit/Button";
import Textfield from "./uikit/Textfield";
import Textarea from "./uikit/Textarea";
import styles from "./AddNewPost.module.scss";
import firebase from "../firebase";
import { ReactComponent as SendIcon } from "../img/icons/send.svg";

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
      })
      .then(function () {
        console.info("Пост был успешно опубликован!");
      })
      .catch(function (error) {
        console.error("Ошибка публикации поста: ", error);
      });

    document.getElementById("add-post-form").reset();
  }

  return (
    <form className={styles["add-post"]} onSubmit={onSubmit} id="add-post-form">
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
        <Button type="primary">
          <span>Отправить</span>
          <SendIcon width="14px" height="14px" style={{ marginLeft: "8px" }} />
        </Button>
      </div>
    </form>
  );
};

export default AddNewPost;
