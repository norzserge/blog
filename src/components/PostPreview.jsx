import React from "react";
import styles from "./PostPreview.module.scss";
import thumb from "../img/js.jpg";
import Layout from "./uikit/Layout";

const PostPreview = (props) => {
  return (
    <div className={styles.preview}>
      <div className={styles["preview-img"]}>
        <img src={thumb} alt="thumb" className="img-fluid" />
      </div>
      <div className={styles["preview-content"]}>
        <div className={styles["author-info"]}>
          <Layout direction="horizontal">
            <span className={styles["post-author"]}>{props.name}</span>
            <span className={styles["post-date"]}>{props.date}</span>
          </Layout>
        </div>
        <h2 className={styles["preview-header"]}>{props.header}</h2>
        <p className={styles["preview-text"]}>{props.text}</p>
      </div>
    </div>
  );
};

export default PostPreview;
