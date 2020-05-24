import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import styles from "./AddNewPost.module.scss";

import AvatarsList from "./AvatarsList";
import Button from "./uikit/Button";
import Textfield from "./uikit/Textfield";
import Textarea from "./uikit/Textarea";
import Layout from "./uikit/Layout";

import addErrorStyle from "./modules/addErrorStyle";
import errors from "./modules/errors";
import errorOutput from "./modules/errorOutput";

import { ReactComponent as SendIcon } from "../img/icons/send.svg";
import ava1 from "../img/ava-1.png";

const AddNewPost = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  // сохранения нисходящего потока данных (подъём состояния selected из AvatarsList в родителя)
  let [selectedOption, setSelectedOption] = useState(ava1); // <-- устаналиваем по дефолту src первой img если юзер не выберет другую
  let [nameValid, setNameValid] = useState(null);
  let [headerValid, setHeaderValid] = useState(null);
  let [messageValid, setMessageValid] = useState(null);
  let [formValid, setFormValid] = useState(false);

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

    document.querySelector('[name = "name"]').classList.remove("no-error");
    document.querySelector('[name = "header"]').classList.remove("no-error");
    document.querySelector('[name = "message"]').classList.remove("no-error");
    document.getElementById("add-post-form").reset();
  }

  // сохранения нисходящего потока данных (подъём функции из AvatarsList в родителя)
  const optionChange = (e) => {
    if (e.target.checked) {
      setSelectedOption((selectedOption = e.target.value));
    }
  };

  const fieldValidate = (e) => {
    const fieldName = e.currentTarget.name;
    switch (fieldName) {
      case "name":
        setNameValid(
          (nameValid = errors[0].pattern.test(e.currentTarget.value))
        );
        addErrorStyle(nameValid, e);
        if (nameValid) {
          setName(e.currentTarget.value);
        }
        break;
      case "header":
        setHeaderValid(
          (headerValid = errors[1].pattern.test(e.currentTarget.value))
        );
        addErrorStyle(headerValid, e);
        if (headerValid) {
          setHeader(e.currentTarget.value);
        }
        break;
      case "message":
        setMessageValid(
          (messageValid = errors[2].pattern.test(e.currentTarget.value))
        );
        addErrorStyle(messageValid, e);
        if (messageValid) {
          setText(e.currentTarget.value);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFormValid((formValid = !nameValid || !headerValid || !messageValid));
  }, [nameValid, headerValid, messageValid]);

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
              name="name"
              value={name}
              onChangeProp={fieldValidate}
            />
          </div>
          <div className={styles.control}>
            <Textfield
              placeholder="Тема"
              label="Заголовок"
              name="header"
              value={header}
              onChangeProp={fieldValidate}
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
          name="message"
          rowNum={5}
          value={text}
          onChangeProp={fieldValidate}
        />
      </div>
      <Layout direction={"horizontal"}>
        <div className={styles["send-button"]}>
          <Button type="primary" isDisabled={formValid}>
            <span>Отправить</span>
            <SendIcon
              width="14px"
              height="14px"
              style={{ marginLeft: "8px" }}
            />
          </Button>
        </div>
        <div className={styles["errors-panel"]}>
          <div className={styles["error-item"]}>
            {errorOutput(nameValid, errors[0])}
          </div>
          <div className={styles["error-item"]}>
            {errorOutput(headerValid, errors[1])}
          </div>
          <div className={styles["error-item"]}>
            {errorOutput(messageValid, errors[2])}
          </div>
        </div>
      </Layout>
    </form>
  );
};

export default AddNewPost;
