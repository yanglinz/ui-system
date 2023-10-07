import { useState } from "preact/hooks";
import { RootLayer } from "../src/Layer";
import Dialog from "../src/Dialog";
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
        Open Dialog
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
    <DialogTrigger>
      <h1>Basic Dialog</h1>
    </DialogTrigger>
  );
}

function NestedDialog() {
  return (
    <DialogTrigger>
      <h1>Nested Dialog</h1>
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
