import { useState } from "preact/hooks";

import LayerProvider from "../../preact-layers/src/LayerProvider";
import Diaglog from "../../preact-composite/src/Dialog";

function DialogStory() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return <Diaglog isOpen={showDialog}>Hello world!</Diaglog>;
}

export function App() {
  return (
    <>
      <LayerProvider>
        <DialogStory />
      </LayerProvider>
    </>
  );
}
