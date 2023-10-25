import { Layer } from "./Layer";

function DialogOverlay(props) {
  return <div className="fixed inset-0 bg-stone-300/50">{props.children}</div>;
}

function Dialog(props) {
  const { isOpen } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <Layer>
      <DialogOverlay>{props.children}</DialogOverlay>
    </Layer>
  );
}

export default Dialog;
