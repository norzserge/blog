import React from "react";
import classnames from "classnames";
import styles from "./Alert.module.scss";
import { ReactComponent as CancelIcon } from "../../img/icons/cancel.svg";

const Alert = (props) => {
  const closeAlert = (e) => {
    e.currentTarget.parentNode.remove();
  };
  return (
    <div className={classnames(styles.alert, styles[props.status])}>
      <div className={styles["alert-message"]}>{props.children}</div>
      <button onClick={closeAlert} className={styles["close-button"]}>
        <CancelIcon width="12px" height="12px" />
      </button>
    </div>
  );
};

export default Alert;
