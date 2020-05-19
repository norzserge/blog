import React from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav";
import Logo from "../img/logo.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>
        <img src={Logo} alt={"logo"} className={styles.logo} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
