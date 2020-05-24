import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink exact activeClassName={styles["active"]} to={link.to}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
