import React from "react";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return <div className={styles[props.direction]}>{props.children}</div>;
};

export default Layout;
