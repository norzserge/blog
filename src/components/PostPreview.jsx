import React, { useState } from "react";
import styles from "./PostPreview.module.scss";
import thumb from "../img/js.jpg";
import Layout from "./uikit/Layout";
import firebase from "../firebase";
import SimpleDateTime from "react-simple-timestamp-to-date";

const PostPreview = (props) => {
  const [text, setText] = useState(props.text);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("posts")
      .doc(props.id)
      .set({ ...props, text });
  };

  const onDelete = (e) => {
    const db = firebase.firestore();
    db.collection("posts").doc(props.id).delete();
    e.target.parentElement.remove();
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
            {/* <input
              type="text"
              defaultValue={props.name}
              className={styles["post-author"]}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button onClick={onUpdate}>Update</button> */}
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
        {/* <p className={styles["preview-text"]}>{props.text}</p> */}
        <textarea
          value={props.text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={onUpdate}>Update</button>
      </div>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
};

export default PostPreview;
