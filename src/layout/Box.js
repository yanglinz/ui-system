import React, { createRef } from "react";

import { useLocalCssVariable } from "../lib/useCssVariable";
import { parseResponsive } from "../lib/responsive";

import styles from "./Box.module.css";

function Box(props) {
  const padding = props.padding || 8;
  const responsivePadding = parseResponsive(padding);

  const ref = createRef(null);
  useLocalCssVariable(ref, "--ui-system-box-padding", responsivePadding.mobile);
  useLocalCssVariable(
    ref,
    "--ui-system-box-padding-tablet",
    responsivePadding.tablet
  );
  useLocalCssVariable(
    ref,
    "--ui-system-box-padding-desktop",
    responsivePadding.desktop
  );

  return (
    <div className={styles.Box} ref={ref}>
      {props.children}
    </div>
  );
}

export default Box;
