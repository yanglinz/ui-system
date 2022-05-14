import Portal from "preact-portal";

import { LayerProviderContext } from "./LayerProvider";

function Layer(props) {
  return (
    <LayerProviderContext.Consumer>
      {(mount) => {
        return <Portal into={mount}>{props.children}</Portal>;
      }}
    </LayerProviderContext.Consumer>
  );
}

export default Layer;
