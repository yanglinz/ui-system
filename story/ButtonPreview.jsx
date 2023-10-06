import PreviewStory from "./PreviewStory";
import Button from "../src/Button";

function BasicButton() {
  return <Button>Hello world!</Button>;
}

function AlertButton() {
  return <Button>Hello world!</Button>;
}

const previews = [
  [BasicButton, "Basic Button"],
  [AlertButton, "Alert Button"],
];

export default function ButtonPreviews() {
  return previews.map((p) => {
    const [Component, title] = p;
    return (
      <div className="mb-4">
        <PreviewStory title={title}>
          <Component />
        </PreviewStory>
      </div>
    );
  });
}
