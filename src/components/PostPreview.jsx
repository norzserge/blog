import React, { useState } from "react";
import styles from "./PostPreview.module.scss";
import thumb from "../img/js.jpg";
import Layout from "./uikit/Layout";
import firebase from "../firebase";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Button from "./uikit/Button";

const PostPreview = (props) => {
  const [text, setText] = useState(props.text);
  const [date, setDate] = useState(new Date());
  const [isEditable, setEditable] = useState(true);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("posts")
      .doc(props.id)
      .set({ ...props, text, date });
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
            <Button text="Edit post" type="modify" onClickProp={onEdit} />
          ) : (
            <>
              <Button text="Save" type="success" onClickProp={onUpdate} />
              <Button text="Cancel" type="ligth" onClickProp={onEdit} />
              <Button text="Remove" type="danger" onClickProp={onDelete} />
            </>
          )}
        </Layout>
      </div>
    </div>
  );
};

export default PostPreview;
