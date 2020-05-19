import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={classnames(styles.btn, styles[props.type])}
      onClick={props.onClickProp}
      style={props.inlineStyles}
    >
      {props.text ? props.text : props.children}
    </button>
  );
};

export default Button;
