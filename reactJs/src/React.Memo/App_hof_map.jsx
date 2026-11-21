import React from "react";

const App = () => {
  const users = ["John", "Jane", "Alice", "Bob"];
  return (
    <div>
      {users.map((user) => (
        <h2>{user}</h2>
      ))}
    </div>
  );
};

export default App;
