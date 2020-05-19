import React, { useState } from "react";
import styles from "./PostPreview.module.scss";
import thumb from "../img/js.jpg";
import Layout from "./uikit/Layout";
import firebase from "../firebase";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Button from "./uikit/Button";
import { ReactComponent as EditIcon } from "../img/icons/edit.svg";
import { ReactComponent as CancelIcon } from "../img/icons/cancel.svg";
import { ReactComponent as DeleteIcon } from "../img/icons/delete.svg";
import { ReactComponent as SaveIcon } from "../img/icons/save.svg";

const PostPreview = (props) => {
  const [text, setText] = useState(props.text);
  const [isEditable, setEditable] = useState(true);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("posts")
      .doc(props.id)
      .update({ text }) // <<-- вместо set используем update для обновления определенного поля
      .then(function () {
        console.info("Документ успешно обновлен!");
      })
      .catch(function (error) {
        console.error("Ошибка обновления документа: ", error);
      });

    setEditable(!isEditable);
  };

  const onDelete = (e) => {
    const db = firebase.firestore();
    db.collection("posts").doc(props.id).delete();

    e.target.parentElement.parentElement.parentElement.remove();
  };

  const onEdit = () => {
    setEditable(!isEditable);
  };

  return (
    <div className={styles.preview} id={"post-id"}>
      <div className={styles["preview-img"]}>
        <img src={thumb} alt="thumb" className="img-fluid" />
      </div>
      <div className={styles["preview-content"]}>
        <div className={styles["author-info"]}>
          <Layout direction="horizontal">
            <span className={styles["post-author"]}>{props.name}</span>
            <span className={styles["post-date"]}>
              <SimpleDateTime
                dateFormat={"DMY"}
                dateSeparator={"."}
                timeSeparator={":"}
              >
                {props.date}
              </SimpleDateTime>
            </span>
          </Layout>
        </div>
        <h2 className={styles["preview-header"]}>{props.header}</h2>
        {isEditable ? (
          <p className={styles["preview-text"]}>{props.text}</p>
        ) : (
          <textarea
            className={"editable-field"}
            defaultValue={props.text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )}
        <Layout direction="horizontal" cssClass="editable-field-controls">
          {isEditable ? (
            <Button type="modify" onClickProp={onEdit}>
              <span>Редактировать пост</span>
              <EditIcon
                width="12px"
                height="12px"
                style={{ marginLeft: "4px" }}
              />
            </Button>
          ) : (
            <>
              <Button type="success" onClickProp={onUpdate}>
                <span>Сохранить</span>
                <SaveIcon
                  width="14px"
                  height="14px"
                  style={{ marginLeft: "8px" }}
                />
              </Button>
              <Button type="ligth" onClickProp={onEdit}>
                <span>Отмена</span>
                <CancelIcon
                  width="12px"
                  height="12px"
                  style={{ marginLeft: "8px" }}
                />
              </Button>
              <Button
                type="danger"
                onClickProp={onDelete}
                inlineStyles={{ marginLeft: "auto" }}
              >
                <DeleteIcon width="14px" height="14px" />
              </Button>
            </>
          )}
        </Layout>
      </div>
    </div>
  );
};

export default PostPreview;
