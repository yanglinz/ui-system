import Layer, { useCurrentLayer } from "./Layer";

function LayerContextTest() {
  const layer = useCurrentLayer();
  return (
    <h2>inner</h2>
  )
}

function Dialog(props) {
  const { isOpen } = props;
  return (
    <Layer>
      <div role="dialog" aria-modal>
        {props.children}
        <LayerContextTest></LayerContextTest>
      </div>
    </Layer>
  );
}

export default Dialog;
