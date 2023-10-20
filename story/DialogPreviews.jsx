import { useState } from "preact/hooks";
import { RootLayer } from "../src/Layer";
import Dialog from "../src/Dialog";
import Button from "../src/Button";
import DialogContent from "../src/DialogContent";
import PreviewStory from "./PreviewStory";

function DialogTrigger(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-stone-100 border border-stone-400 p-1 rounded-sm"
        onClick={() => setIsOpen(true)}
      >
        {props.buttonText}
      </button>
      <Dialog isOpen={isOpen}>
        <DialogContent onClose={() => setIsOpen(false)}>
          {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BasicDialog() {
  return (
    <DialogTrigger buttonText="Open basic dialog">
      <h1>Basic Dialog</h1>
      <br />
      Here's a dialog component.
    </DialogTrigger>
  );
}

function NestedDialog() {
  return (
    <DialogTrigger buttonText="Open outer nested dialog">
      <h1>Nested Dialog</h1>
      <br />
      Here's a dialog component.
      <br />
      <DialogTrigger buttonText="Open outer nested dialog">
        <h1>Nested Dialog Inner</h1>
        <br />
        Here's the nested dialog component.
      </DialogTrigger>
    </DialogTrigger>
  );
}

function DialogPreviewWrapper(props) {
  // TODO: Layer provider need to use an id provided
  const { key } = props;
  return <RootLayer>{props.children}</RootLayer>;
}

const previews = [
  [BasicDialog, "Basic Dialog"],
  [NestedDialog, "Nested Dialog"],
];

export default function DialogPreviews() {
  return previews.map((p, i) => {
    const [Component, name] = p;

    return (
      <div className="mb-4">
        <PreviewStory title={name}>
          <DialogPreviewWrapper key={i}>
            <Component />
          </DialogPreviewWrapper>
        </PreviewStory>
      </div>
    );
  });
}
