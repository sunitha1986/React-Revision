import React, { useState } from "react";

const Child = React.memo(function Child({ name }) {
  console.log("Child Rendered");
  return <h2>Hello, {name}</h2>;
});

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child name="Suni"></Child>
    </div>
  );
};

export default App;
