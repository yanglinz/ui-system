import React, { createRef } from "react";

import { useLocalCssVariable } from "../lib/useCssVariable";
import { parseResponsive } from "../lib/responsive";

import { boxStyle } from "./Box.css.ts";

export function Box(props) {
  const padding = parseResponsive(props.padding || 8);

  // const ref = createRef(null);
  // useLocalCssVariable(ref, "--ui-system-box-padding", padding.mobile);
  // useLocalCssVariable(ref, "--ui-system-box-padding-tablet", padding.tablet);
  // useLocalCssVariable(ref, "--ui-system-box-padding-desktop", padding.desktop);

  return <div className={boxStyle}>{props.children}</div>;
}

export default Box;
