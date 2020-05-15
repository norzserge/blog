import React from "react";
import styles from "./Textfield.module.scss";

const Textfield = (props) => {
  return (
    <div className={styles["textfield-wrapper"]}>
      <label className={"label"}>{props.label}</label>
      <input
        type="text"
        defaultValue={props.value}
        className={styles.textfield}
        placeholder={props.placeholder}
        onChange={props.onChangeProp}
      />
    </div>
  );
};

export default Textfield;
