import React, { useState } from "react";
import Child from "../components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Parent: {count}</div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default App;
