import { useLayoutEffect, useCallback, createRef } from "react";

function formatValue(value) {
  let formatted = value;
  if (Number.isInteger(value)) {
    formatted = `${value}px`;
  }
  return formatted;
}

export function useGlobalCssVariable(name, value) {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(name, formatValue(value));
  }, []);
}

export function useLocalCssVariable(name, value) {
  const ref = createRef(null);
  const setRef = useCallback((node) => {
    ref.current = node;
  }, []);

  useLayoutEffect(() => {
    ref.current.style.setProperty(name, formatValue(value));
  }, [ref, setRef]);

  return setRef;
}
