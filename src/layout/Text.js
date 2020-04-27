import React from "react";

import { useLocalCssVariable } from "../lib/useCssVariable";

import styles from "./Text.module.css";

function Text(props) {
  const size = props.size || 16;
  const ref = useLocalCssVariable("--ui-system-text-size", size);
  return (
    <div ref={ref} className={styles.Text}>
      {props.children}
    </div>
  );
}

export default Text;
