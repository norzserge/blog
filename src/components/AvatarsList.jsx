import React from "react";
import Layout from "./uikit/Layout";
import styles from "./AvatarsList.module.scss";
import ava1 from "../img/ava-1.png";
import ava2 from "../img/ava-2.png";
import ava3 from "../img/ava-3.png";
import ava4 from "../img/ava-4.png";
import ava5 from "../img/ava-5.png";
import ava6 from "../img/ava-6.png";
import ava7 from "../img/ava-7.png";
import ava8 from "../img/ava-8.png";

const AvatarsList = (props) => {
  const imgArray = [
    { path: ava1, isDefaultcheck: true },
    { path: ava2 },
    { path: ava3 },
    { path: ava4 },
    { path: ava5 },
    { path: ava6 },
    { path: ava7 },
    { path: ava8 },
  ];
  return (
    <>
      <span className="label">Выберите аватар</span>
      <div className={styles["avatars-list"]}>
        {imgArray.map((img, index) => (
          <label key={index} className={styles["avatar-label"]}>
            <input
              type="radio"
              name="react-tips"
              id={`ava-${index}`}
              value={img.path}
              defaultChecked={img.isDefaultcheck ? true : false}
              onChange={props.selectImg}
            />
            <img
              src={img.path}
              alt={"аватар"}
              className={styles["avatar-img"]}
            />
          </label>
        ))}

        {/* <label>
          <input
            type="radio"
            name="react-tips"
            value="option1"
            defaultChecked
            onChange={props.selectImg}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option2"
            onChange={props.selectImg}
          />
          Option 2
        </label>
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option3"
            onChange={props.selectImg}
          />
          Option 3
        </label> */}
      </div>
    </>
  );
};

export default AvatarsList;
