import { useEffect, useRef } from "preact/hooks";

export function useRestoreFocus() {
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement;
    return () => {
      previouslyFocusedElement.current?.focus();
    };
  }, []);
}
