export function PreviewStory(props) {
  return (
    <div className="px-4">
      <div className="md:w-8/12 md:mx-auto">
        <div className="border border-stone-200">
          <div className="border-b border-stone-200 px-4 py-2">
            <p className="text-sm text-stone-500"> {props.title} </p>
          </div>
          <div className="p-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
