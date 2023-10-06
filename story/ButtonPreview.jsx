import PreviewStory from "./PreviewStory";
import Button from "../src/Button";

function BasicButton() {
  return <Button>Hello world!</Button>;
}

function AlertButton() {
  return <Button>Hello world!</Button>;
}

export default function ButtonPreviews() {
  return [BasicButton, AlertButton].map((c) => {
    return <PreviewStory>{c()}</PreviewStory>;
  });
}
