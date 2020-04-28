import React from "react";

import Text from "./Text";
import * as colors from "../theme/colors";

export const main = () => {
  let sizes = [4, 8, 10, 12, 14, 16, 18, 24, 32, 48];
  sizes = [].concat(sizes, sizes.slice().reverse());

  return (
    <div
      style={{
        background: colors.PRIMARY_COLORS.c10,
        border: `1px solid ${colors.PRIMARY_COLORS.c9}`,
      }}
    >
      {sizes.map((s, i) => (
        <Text key={i} size={s}>
          Hello design system!
        </Text>
      ))}
    </div>
  );
};

export default { title: "Text" };
