import Router from "preact-router";
import ButtonPreview from "./ButtonPreview";
import DialogPreviews from "./DialogPreviews";
import { render } from "preact";
import "../src/index.css";

function Nav() {
  return (
    <ul>
      <li>
        <a href="/button">Button Previews</a>
      </li>
      <li>
        <a href="/dialog">Dialog Previews</a>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <ButtonPreview path="button" />
        <DialogPreviews path="dialog" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("app"));
