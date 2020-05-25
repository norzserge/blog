import React from "react";
import classnames from "classnames";
import styles from "./About.module.scss";
import LogoReact from "../img/logo-react.png";
import LogoYarn from "../img/logo-yarn.png";
import LogoGit from "../img/logo-git.png";
import LogoSass from "../img/logo-sass.png";
import LogoSmacss from "../img/logo-smacss.png";
import LogoFlex from "../img/logo-flex.png";
import LogoHTML from "../img/logo-html.png";
import LogoJS from "../img/logo-js.png";
import LogoFirebase from "../img/logo-firebase.png";
import LogoCSSModules from "../img/logo-css-modules.png";
import LogoRegExp from "../img/logo-regexp.png";

const About = (props) => {
  const logos = [
    { src: LogoReact, width: "auto" },
    { src: LogoFirebase, width: "auto" },
    { src: LogoGit, width: 80 },
    { src: LogoYarn, width: 125 },
    { src: LogoSass, width: 80 },
    { src: LogoSmacss, width: 120 },
    { src: LogoCSSModules, width: 90 },
    { src: LogoRegExp, width: 120 },
    { src: LogoFlex, width: 120 },
    { src: LogoJS, width: 75 },
    { src: LogoHTML, width: 60 },
  ];
  return (
    <div>
      <p>
        Данная работа выполнена в качестве выпускной для курса
        "Frontend-разработчик" (ИТМО).
      </p>
      <p>Используемые технологии:</p>
      <ul className={styles["logo-list"]}>
        {logos.map((logo, index) => (
          <li key={index} className={styles["logo-item"]}>
            <img
              src={logo.src}
              style={{ width: logo.width }}
              alt={"логотип"}
              className={classnames(styles["logo-img"], "img-fluid")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
