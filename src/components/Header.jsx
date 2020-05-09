import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>Header</div>
    </header>
  );
};

export default Header;
