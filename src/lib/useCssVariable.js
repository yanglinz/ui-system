import { useLayoutEffect } from "react";

function useCssVariable(name, value) {
  let formattedValue = value;
  if (Number.isInteger(value)) {
    formattedValue = `${value}px`;
  }

  useLayoutEffect(() => {
    document.documentElement.style.setProperty(name, formattedValue);
  });
}

export default useCssVariable;
