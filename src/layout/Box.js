import React from "react";

import { useGlobalCssVariable } from "../lib/useCssVariable";

import styles from "./Box.module.css";

function Box(props) {
  useGlobalCssVariable("--ui-system-box", 42);
  return <div className={styles.Box}>{props.children}</div>;
}

export default Box;
