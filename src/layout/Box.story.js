import React from "react";

import Box from "./Box";
import Outline from "../storybook/Outline";

export const main = () => (
  <Outline>
    <Box padding={8}>Hello Button</Box>
  </Outline>
);

export default { title: "Box" };
