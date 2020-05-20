import React, { useState } from "react";
import Layout from "./uikit/Layout";
import styles from "./AvatarsList.module.scss";

const AvatarsList = (props) => {
  //   let [selectedOption, setSelectedOption] = useState("option1");
  //   const optionChange = (e) => {
  //     if (e.target.checked) {
  //       setSelectedOption((selectedOption = e.target.value));
  //       console.log(selectedOption);
  //     }
  //   };

  return (
    <>
      <span className="label">Выберите аватар</span>
      <div className={styles["avatars-list"]}>
        <div className={styles["form-check"]}>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              defaultChecked
              onChange={props.prop}
            />
            Option 1
          </label>
        </div>
        <div className={styles["form-check"]}>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              onChange={props.prop}
            />
            Option 2
          </label>
        </div>
        <div className={styles["form-check"]}>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              onChange={props.prop}
            />
            Option 3
          </label>
        </div>
      </div>
    </>
  );
};

export default AvatarsList;
