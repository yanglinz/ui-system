import React, { createRef } from "react";
import classNames from "classnames";

import { useLocalCssVariable } from "../lib/useCssVariable";

import styles from "./Text.module.css";

/**
 * Text component inspired by Braid Design System
 * https://github.com/seek-oss/braid-design-system/blob/dc052d40889d6f584971480b21bb6596ff4ec5b1/lib/hooks/typography/basekick.ts
 */
function Text(props) {
  const size = props.size || 16;

  const ref = createRef();
  useLocalCssVariable(ref, "--ui-system-text-size", size);

  return (
    <div
      className={classNames(styles.Text, {
        [styles.TextWithOffset]: size > 10,
      })}
      ref={ref}
    >
      {props.children}
    </div>
  );
}

export default Text;
