import { useState } from "preact/hooks";
import Button from "../src/Button";

function BasicDialog() {
  return <Button>Hello world!</Button>;
}

export default function ButtonPreviews() {
  return [BasicDialog].map((c, i) => {
    return c();
  });
}
