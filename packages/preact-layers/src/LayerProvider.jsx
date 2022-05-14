import { createContext } from "preact";

import RichTextArea from "preact-richtextarea";

export const LayerProviderContext = createContext("layers");

function LayerProvider(props) {
  // TODO: Handle case where mount is not provided
  const { mount } = props;
  return (
    <LayerProviderContext.Provider value={mount}>
      {props.children}

      <RichTextArea />
    </LayerProviderContext.Provider>
  );
}

export default LayerProvider;
