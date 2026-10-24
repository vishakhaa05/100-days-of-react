
const withJSX = (
  <div className="card">
    <h2>Hello, React</h2>
    <p>This is JSX</p>
  </div>
);


const withoutJSX = React.createElement(
  "div",
  { className: "card" },
  React.createElement("h2", null, "Hello, React"),
  React.createElement("p", null, "This is JSX")
);

