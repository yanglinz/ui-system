import React from "react";

import styles from "./Inline.module.css";

export function Inline(props) {
  const spacing = props.spacing || 8;
  return (
    <div className={styles.Inline}>
      {React.Children.map(props.children, (c, i) => (
        <div style={{ display: "flex", marginLeft: i > 0 ? spacing : 0 }}>
          {c}
        </div>
      ))}
    </div>
  );
}

export default Inline;
