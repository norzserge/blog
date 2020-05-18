import React from "react";
import classnames from "classnames";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classnames(styles[props.direction], props.cssClass)}>
      {props.children}
    </div>
  );
};

export default Layout;
