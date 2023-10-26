import { useRestoreFocus } from "./useRestoreFocus";
import { useLayerOutsideClick } from "./useOutsideClick";
import { useLayerKeyboardShortcut } from "./useKeyboardShortcut";
import { FocusTrap } from "./FocusTrap";

const KEYCODE_ESC = 27;

export function DialogContent(props) {
  useRestoreFocus();
  useLayerKeyboardShortcut((event) => {
    if (event.keyCode === KEYCODE_ESC) {
      props.onClose();
    }
  });
  const ref = useLayerOutsideClick(props.onClose);
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
