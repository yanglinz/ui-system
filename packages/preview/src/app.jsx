import LayerProvider from "../../preact-layers/src/LayerProvider";
import Diaglog from "../../preact-composite/src/Dialog";

export function App() {
  return (
    <>
      <LayerProvider>
        <Diaglog>Hello world!</Diaglog>

        <p>Hello world!</p>
      </LayerProvider>
    </>
  );
}
