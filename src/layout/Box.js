import React, { createRef } from "react";

import { useLocalCssVariable } from "../lib/useCssVariable";

import styles from "./Box.module.css";

function Box(props) {
  const padding = props.padding || 8;

  const ref = createRef(null);
  useLocalCssVariable(ref, "--ui-system-box", padding);

  return (
    <div className={styles.Box} ref={ref}>
      {props.children}
    </div>
  );
}

export default Box;
