import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = (props) => {
  return (
    <div className={styles["textarea-wrapper"]}>
      <label className="label">{props.label}</label>
      <textarea
        placeholder={props.placeholder}
        className={styles["textarea-field"]}
        rows={props.rowNum}
      />
    </div>
  );
};

export default Textarea;
