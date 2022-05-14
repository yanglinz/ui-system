import { createPortal } from "preact/compat";
import { useState, useLayoutEffect } from "preact/hooks";

import { LayerProviderContext } from "./LayerProvider";

function getVectorId() {
  window.__VECTOR_ID__ = window.__VECTOR_ID__ || 0;
  window.__VECTOR_ID__++;
  return window.__VECTOR_ID__.toString();
}

function usePortalContainer(mount) {
  const [container, setContainer] = useState(null);

  useLayoutEffect(() => {
    // TODO: Do we need to do any sort of cleanup?
    const prefix = mount.id || "layer-portal-container";
    const containerEl = document.createElement("div");
    containerEl.id = prefix + "-" + getVectorId();
    mount.appendChild(containerEl);
    setContainer(containerEl);
  }, []);

  return container;
}

function LayerPortal(props) {
  const { mount } = props;
  const container = usePortalContainer(mount);
  return container ? createPortal(props.children, container) : null;
}

function Layer(props) {
  return (
    <LayerProviderContext.Consumer>
      {(mount) => <LayerPortal mount={mount}>{props.children}</LayerPortal>}
    </LayerProviderContext.Consumer>
  );
}

export default Layer;
