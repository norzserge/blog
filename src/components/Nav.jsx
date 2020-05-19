import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = (props) => {
  const links = [
    {
      to: "/",
      text: "Главная",
    },
    {
      to: "/about",
      text: "О проекте",
    },
  ];
  return (
    <ul className={styles["nav-list"]}>
      {links.map((link, index) => (
        <li key={index} className={styles["nav-item"]}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
