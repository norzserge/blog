import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = (props) => {
  return (
    <div className={styles["textarea-wrapper"]}>
      <label className="label">{props.label}</label>
      <textarea
        defaultValue={props.value}
        className={styles["textarea-field"]}
        placeholder={props.placeholder}
        rows={props.rowNum}
        onChange={props.onChangeProp}
      />
    </div>
  );
};

export default Textarea;
