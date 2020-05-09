import React from "react";
import styles from "./Textfield.module.scss";

const Textfield = (props) => {
  return (
    <div className={styles["textfield-wrapper"]}>
      <label className={"label"}>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.textfield}
      />
    </div>
  );
};

export default Textfield;
