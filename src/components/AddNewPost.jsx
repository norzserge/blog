import React, { useState } from "react";
import Button from "./uikit/Button";
import Textfield from "./uikit/Textfield";
import Textarea from "./uikit/Textarea";
import AvatarsList from "./AvatarsList";
import Layout from "./uikit/Layout";
import styles from "./AddNewPost.module.scss";
import firebase from "../firebase";
import { ReactComponent as SendIcon } from "../img/icons/send.svg";
import ava1 from "../img/ava-1.png";

const AddNewPost = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  // сохранения нисходящего потока данных (подъём состояния selected из AvatarsList в родителя)
  let [selectedOption, setSelectedOption] = useState(ava1); // <-- устаналиваем по дефолту src первой img если юзер не выберет другую

  function onSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();
    db.collection("posts")
      .add({
        name,
        date,
        header,
        text,
        selectedOption,
      })
      .then(() => {
        setName("");
        setDate(new Date()); // <-- не обнуляем дату, чтобы использовать при повторной отправке поста
        setHeader("");
        setText("");
        setSelectedOption(ava1); // <-- оставляем по дефолту src первой img если юзер не выберет другую и не рефрешнет страницу
      })
      .then(function () {
        console.info("Пост был успешно опубликован!");
      })
      .catch(function (error) {
        console.error("Ошибка публикации поста: ", error);
      });

    document.getElementById("add-post-form").reset();
  }

  // сохранения нисходящего потока данных (подъём функции из AvatarsList в родителя)
  const optionChange = (e) => {
    if (e.target.checked) {
      setSelectedOption((selectedOption = e.target.value));
      console.log(selectedOption);
    }
  };

  return (
    <form
      className={styles["add-post-form"]}
      onSubmit={onSubmit}
      id="add-post-form"
    >
      <div className={styles["name-title-avatars-layout"]}>
        <div className={styles["name-title-layout"]}>
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
        </div>
        <Layout direction="vertical">
          <AvatarsList selectImg={optionChange} />
        </Layout>
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
