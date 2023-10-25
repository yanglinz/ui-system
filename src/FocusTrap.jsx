import { useFocusTrap } from "@mantine/hooks";

export function FocusTrap(props) {
  const ref = useFocusTrap();

  // TODO: Conditionally trap focus based on whether current layer
  // is the top layer Get the top layer and only trap focus there.
  return (
    <div className="--layer-trap-focus" ref={ref}>
      {props.children}
    </div>
  );
}
