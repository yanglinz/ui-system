import { createContext } from "preact";
import { createPortal } from "preact/compat";
import { useState, useLayoutEffect, useContext } from "preact/hooks";

// Layers is an abstraction that helps manage various issues around
// z-index, focus management, keyboard shortcuts, etc in a globally
// consistent way. The idea is to create elements that are siblings
// of the main `app` element at the end of `body` that we can render
// into outside of the normal DOM hierarchy.

window.__LAYER_ID__ = 0;

function getLayerId() {
  window.__LAYER_ID__++;
  return window.__LAYER_ID__;
}

function createLayerDOMNode(id) {
  const layerDOMNode = document.createElement("div");
  layerDOMNode.id = `__layer_${id}`;
  document.body.appendChild(layerDOMNode);
  return layerDOMNode;
}

class LayerManager {
  constructor() {
    this.id = getLayerId();
    this.parentLayer = null;
    this.childLayer = null;
    this.node = createLayerDOMNode(this.id);
    this.isTop = false;
  }

  pushLayer(childLayer) {
    childLayer.parentLayer = this;
    childLayer.isTop = true;

    this.childLayer = childLayer;
    this.isTop = false;
  }

  popLayer() {
    const childLayer = this.childLayer;
    childLayer.destroy();

    this.childLayer = null;
    this.isTop = true;
  }

  destroy() {
    this.node.remove();
  }
}

const CurrentLayerContext = createContext(null);

export function useCurrentLayer() {
  return useContext(CurrentLayerContext);
}

export function RootLayer(props) {
  let [layer, setLayer] = useState(null);

  useLayoutEffect(() => {
    const rootLayer = new LayerManager();
    setLayer(rootLayer);
  }, []);

  if (!layer) {
    return null;
  }

  return (
    <CurrentLayerContext.Provider value={layer}>
      {props.children}
    </CurrentLayerContext.Provider>
  );
}

const MISSING_PARENT_LAYER_WARNING =
  "Layer component could not detect a parent layer. This may be caused by a missing `<RootLayer>` component at the root of the app tree.";

export function Layer(props) {
  const parentLayer = useCurrentLayer();
  let [layer, setLayer] = useState(null);

  useLayoutEffect(() => {
    if (!parentLayer) {
      console.warn(MISSING_PARENT_LAYER_WARNING);
      return;
    }

    const thisLayer = new LayerManager();
    parentLayer.pushLayer(thisLayer);
    setLayer(thisLayer);
    return () => parentLayer.popLayer();
  }, [parentLayer]);

  if (!parentLayer) {
    console.warn(MISSING_PARENT_LAYER_WARNING);
    return null;
  }

  if (!layer) {
    return null;
  }

  return layer.node ? (
    <CurrentLayerContext.Provider value={layer}>
      {createPortal(props.children, layer.node)}
    </CurrentLayerContext.Provider>
  ) : null;
}
