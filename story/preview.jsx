import Router from "preact-router";
import DialogPreviews from "./DialogPreviews";
import { render } from "preact";
import "../src/index.css";

function Nav() {
  return (
    <ul>
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
        <DialogPreviews path="dialog" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("app"));
