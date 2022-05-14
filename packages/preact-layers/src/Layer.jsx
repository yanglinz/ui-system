import { createPortal } from "preact/compat";

import { LayerProviderContext } from "./LayerProvider";

function Layer(props) {
  return (
    <LayerProviderContext.Consumer>
      {(mount) => {
        return createPortal(props.children, mount);
      }}
    </LayerProviderContext.Consumer>
  );
}

export default Layer;
