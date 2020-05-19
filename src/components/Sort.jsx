import React from "react";
import styles from "./Sort.module.scss";
import Button from "../components/uikit/Button";
import { ReactComponent as ArrowsIcon } from "../img/icons/arrows.svg";
import { ReactComponent as InfoIcon } from "../img/icons/info.svg";

const Sort = (props) => {
  return (
    <div className={styles["sort-panel-layout"]}>
      <div className={styles["sort-panel-info"]}>
        <InfoIcon width="12px" height="12px" style={{ marginRight: "4px" }} />
        <span>Сортировка постов</span>
      </div>
      <Button type="ligth" onClickProp={props.onSort}>
        <ArrowsIcon width="16px" height="16px" style={{ marginRight: "8px" }} />
        {props.isSort ? "Сначала старые" : "Сначала новые"}
      </Button>
    </div>
  );
};

export default Sort;
