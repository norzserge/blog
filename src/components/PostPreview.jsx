import React from "react";
import styles from "./PostPreview.module.scss";
import thumb from "../img/js.jpg";
import Layout from "./uikit/Layout";

const data = {
  name: "Sergey",
  date: new Date().toLocaleDateString(),
  header: "This is first header",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const PostPreview = (props) => {
  return (
    <div className={styles.preview}>
      <div className={styles["preview-img"]}>
        <img src={thumb} alt="thumb" className="img-fluid" />
      </div>
      <div className={styles["preview-content"]}>
        <div className={styles["author-info"]}>
          <Layout direction="horizontal">
            <span className={styles["post-author"]}>{data.name}</span>
            <span className={styles["post-date"]}>{data.date}</span>
          </Layout>
        </div>
        <h2 className={styles["preview-header"]}>{data.header}</h2>
        <p className={styles["preview-text"]}>{data.text}</p>
      </div>
    </div>
  );
};

export default PostPreview;
