import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>Сергей Метельский, 2020</div>
    </footer>
  );
};

export default Footer;
