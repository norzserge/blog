import React from "react";
import styles from "./Textarea.module.scss";
import classnames from "classnames";

const Textarea = (props) => {
  return (
    <div className={styles["textarea-wrapper"]}>
      <label className="label">{props.label}</label>
      <textarea
        defaultValue={props.value}
        className={classnames(styles["textarea-field"], styles[props.cssClass])}
        placeholder={props.placeholder}
        name={props.name}
        rows={props.rowNum}
        onChange={props.onChangeProp}
      />
    </div>
  );
};

export default Textarea;
