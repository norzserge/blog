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
import { useEffect } from "react";

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
    }
  };

  // валидация поля name и обновление его state
  let [nameValid, setNameValid] = useState(null);
  let [headerValid, setHeaderValid] = useState(null);
  let [messageValid, setMessageValid] = useState(null);
  let [formValid, setFormValid] = useState(false);

  const regExp = [
    {
      namePattern: /^[а-яА-Яa-zA-ZёЁ\s]+$/i,
      errorText: "Имя не может содержать знаков пунктуации или цифр",
    },
    {
      namePattern2: /^[а-яА-Яa-zA-ZёЁ\s]+$/i,
      errorText2: "Заголовок не должен содержать спец. символов",
    },
    {
      namePattern3: /^[а-яА-Яa-zA-ZёЁ\s]+$/i,
      errorText3: "Текст не должен быть длинее 900 символов",
    },
    // titlePattern: /d{1,30}[A-Za-zА-Яа-яЁё0-9!?()-,.]+/g,
    // messagePattern: /^.{1,255}+/g,
  ];

  const addErrorStyle = (field, e) => {
    if (field) {
      e.target.classList.remove("has-error");
      e.target.classList.add("no-error");
    } else {
      e.target.classList.remove("no-error");
      e.target.classList.add("has-error");
    }
  };

  const fieldValidate = (e) => {
    const fieldName = e.target.name;
    switch (fieldName) {
      case "name":
        setNameValid((nameValid = regExp[0].namePattern.test(e.target.value)));
        addErrorStyle(nameValid, e);
        if (nameValid) {
          setName(e.target.value);
        }
        break;
      case "header":
        setHeaderValid(
          (headerValid = regExp[1].namePattern2.test(e.target.value))
        );
        addErrorStyle(headerValid, e);
        if (headerValid) {
          setHeader(e.target.value);
        }
        break;
      case "message":
        setMessageValid(
          (messageValid = regExp[2].namePattern3.test(e.target.value))
        );
        addErrorStyle(messageValid, e);
        if (messageValid) {
          setText(e.target.value);
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
      <div className={styles.control}>
        <Button type="primary" isDisabled={formValid}>
          <span>Отправить</span>
          <SendIcon width="14px" height="14px" style={{ marginLeft: "8px" }} />
        </Button>
        <span>
          {nameValid !== null && !nameValid ? regExp[0].errorText : ""}
          {headerValid !== null && !headerValid ? regExp[1].errorText2 : ""}
          {messageValid !== null && !messageValid ? regExp[2].errorText3 : ""}
        </span>
      </div>
    </form>
  );
};

export default AddNewPost;
