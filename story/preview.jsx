import Router from "preact-router";
import { ButtonPreviews } from "./ButtonPreviews";
import { DialogPreviews } from "./DialogPreviews";
import { render } from "preact";
import "./preview.css";

const previews = [
  [ButtonPreviews, "button"],
  [DialogPreviews, "dialog"],
];

function Nav() {
  return (
    <ul className="m-4">
      {previews.map((p) => {
        const [_, path] = p;
        return (
          <li key={path} className="ml-1">
            <span className="text-sm">
              <a href={`/${path}`}>
                <span className="capitalize">{path}</span> Preview
              </a>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  return (
    <div>
      <div className="border-b border-stone-200 mb-12">
        <Nav />
      </div>
      <Router>
        {previews.map((p) => {
          const [Component, path] = p;
          return <Component path={path} />;
        })}
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("app"));
