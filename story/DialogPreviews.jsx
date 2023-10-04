import { useState } from "preact/hooks";
import { RootLayer } from "../src/Layer";
import Dialog from "../src/Dialog";

function DialogTrigger(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog isOpen={isOpen}>{props.children}</Dialog>
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

export default function DialogPreviews() {
  return [BasicDialog, NestedDialog].map((c, i) => {
    return <DialogPreviewWrapper key={i}>{c()}</DialogPreviewWrapper>;
  });
}
