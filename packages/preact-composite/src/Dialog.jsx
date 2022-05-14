function Dialog(props) {
  const { isOpen } = props;

  return (
    <div role="dialog" aria-modal>
      {props.children}
    </div>
  );
}

export default Dialog;
