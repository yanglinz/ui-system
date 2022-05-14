import { useState } from "preact/hooks";

import LayerProvider from "../../preact-layers/src/LayerProvider";
import Diaglog from "../../preact-composite/src/Dialog";

function DialogStory() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <button onClick={open}>Show Dialog</button>
      <Diaglog isOpen={showDialog}>
        <p>Hello there. I am a dialog</p>
      </Diaglog>
    </>
  );
}

export function App() {
  return (
    <>
      <LayerProvider mount={document.getElementById("app-layers")}>
        <DialogStory />
      </LayerProvider>
    </>
  );
}
