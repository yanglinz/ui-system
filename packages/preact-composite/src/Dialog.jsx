import Layer from "../../preact-layers/src/Layer";

function Dialog(props) {
  const { isOpen } = props;

  return (
    <Layer>
      <div role="dialog" aria-modal>
        {props.children}
      </div>
    </Layer>
  );
}

export default Dialog;
