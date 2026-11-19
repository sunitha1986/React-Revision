import React from "react";
import Child from "../components/Child";

const App = () => {
  const [name, setName] = React.useState(" ");
  return (
    <div>
      <ChildA name={name} setName={setName} />
      <ChildB name={name} />
    </div>
  );
};

function ChildA({ name, setName }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

function ChildB({ name }) {
  return (
    <div>
      {" "}
      <div>Child B: {name}</div>
    </div>
  );
}

export default App;
