import { useCallback } from "preact/hooks";
import useRestoreFocus from "./useRestoreFocus";
import useOutsideClick from "./useOutsideClick";
import FocusTrap from "./FocusTrap";
import { useCurrentLayer } from "./Layer";

function DialogContent(props) {
  const layer = useCurrentLayer();
  useRestoreFocus();

  const handleClose = useCallback(() => {
    if (layer.isTop) props.onClose();
  }, [layer, props.onClose]);

  const ref = useOutsideClick(handleClose);
  return (
    <div ref={ref} role="dialog" aria-modal className="w-8/12 mx-auto mt-16">
      <FocusTrap>
        <div className="relative bg-white p-6">
          <button
            className="absolute top-0 right-6 bg-stone-200 px-1 text-blue-400 bold"
            onClick={props.onClose}
          >
            {/* TODO: Implement a visually hidden component */}
            <span aria-hidden>×</span>
          </button>
          {props.children}
        </div>
      </FocusTrap>
    </div>
  );
}

export default DialogContent;
