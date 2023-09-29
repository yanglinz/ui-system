import { RootLayer } from "../src/Layer";
import Dialog from "../src/Dialog";

function BasicDialog() {
  return (
    <Dialog>
      <h1>Basic Dialog</h1>
    </Dialog>
  );
}

function NestedDialog() {
  return (
    <Dialog>
      <h1>Nested Dialog</h1>
    </Dialog>
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
