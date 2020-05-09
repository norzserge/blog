import React from "react";
import Button from "./uikit/Button";
import Textfield from "./uikit/Textfield";
import Textarea from "./uikit/Textarea";
import styles from "./AddNewPost.module.scss";
import firebase from "../firebase";

const AddNewPost = (props) => {
  return (
    <form className={styles["add-post"]}>
      <div className={styles.control}>
        <Textfield placeholder="Ваше имя" label="Имя" />
      </div>
      <div className={styles.control}>
        <Textarea
          placeholder="Введите сообщение"
          label="Сообщение"
          rowNum={5}
        />
      </div>
      <div className={styles.control}>
        <Button text="Отправить" type="primary" />
      </div>
    </form>
  );
};

export default AddNewPost;
