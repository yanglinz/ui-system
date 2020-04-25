import React from "react";

import useCssVariable from "../lib/useCssVariable";

import styles from "./Box.module.css";

function Box(props) {
  useCssVariable("--ui-system-box", 42);
  return <div className={styles.Box}>{props.children}</div>;
}

export default Box;
