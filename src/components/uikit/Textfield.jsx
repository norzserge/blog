import React from "react";
import styles from "./Textfield.module.scss";
import classnames from "classnames";

const Textfield = (props) => {
  return (
    <div className={styles["textfield-wrapper"]}>
      <label className={"label"}>{props.label}</label>
      <input
        type="text"
        defaultValue={props.value}
        className={classnames(styles.textfield, styles[props.cssClass])}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChangeProp}
      />
    </div>
  );
};

export default Textfield;
