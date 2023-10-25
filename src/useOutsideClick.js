import { useEffect, useRef } from "preact/hooks";

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
