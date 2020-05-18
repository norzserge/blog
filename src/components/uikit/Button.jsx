import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={classnames(styles.btn, styles[props.type])}
      onClick={props.onClickProp}
    >
      {props.text}
    </button>
  );
};

export default Button;
