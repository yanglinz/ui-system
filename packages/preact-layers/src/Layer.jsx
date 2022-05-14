import { LayerProviderContext } from "./LayerProvider";

function Layer(props) {
  return (
    <LayerProviderContext.Consumer>
      {(mount) => props.children}
    </LayerProviderContext.Consumer>
  );
}

export default Layer;
