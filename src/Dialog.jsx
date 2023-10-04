import Layer, { useCurrentLayer } from "./Layer";

function Dialog(props) {
  const { isOpen } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <Layer>
      <div role="dialog" aria-modal>
        {props.children}
      </div>
    </Layer>
  );
}

export default Dialog;
