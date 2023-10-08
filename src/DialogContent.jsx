import useRestoreFocus from "./useRestoreFocus";
import useOutsideClick from "./useOutsideClick";

function DialogContent(props) {
  const { onClose } = props;

  useRestoreFocus();
  const ref = useOutsideClick(onClose);

  return (
    <div ref={ref} role="dialog" aria-modal className="w-8/12 mx-auto mt-16">
      <div className="relative bg-white p-6">
        <button
          className="absolute top-0 right-6 bg-stone-200 px-1 text-blue-400 bold"
          onClick={onClose}
        >
          {/* TODO: Visually hidden close text */}
          <span aria-hidden>×</span>
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default DialogContent;
