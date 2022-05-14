import { createContext } from "preact";

export const LayerProviderContext = createContext("layers");

function LayerProvider(props) {
  // TODO: Handle case where mount is not provided
  const { mount } = props;
  return (
    <LayerProviderContext.Provider value={mount}>
      {props.children}
    </LayerProviderContext.Provider>
  );
}

export default LayerProvider;
