import { useEffect, useRef, useCallback } from "preact/hooks";
import { useCurrentLayer } from "./Layer";

export function useKeyboardShortcut(callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event) {
        callback(event);
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
}

export function useLayerKeyboardShortcut(callback) {
  const layer = useCurrentLayer();

  const wrappedCallback = useCallback(
    (event) => {
      if (layer.isTop) callback(event);
    },
    [layer, callback]
  );

  return useKeyboardShortcut(wrappedCallback);
}
