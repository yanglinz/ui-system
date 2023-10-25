import { useEffect, useRef, useCallback } from "preact/hooks";
import { useCurrentLayer } from "./Layer";

export function useOutsideClick(callback) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
}

export function useLayerOutsideClick(callback) {
  const layer = useCurrentLayer();

  const wrappedCallback = useCallback(() => {
    if (layer.isTop) callback();
  }, [layer, callback]);

  return useOutsideClick(wrappedCallback);
}
