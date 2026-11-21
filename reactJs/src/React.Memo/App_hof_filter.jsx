import React from "react";

const App = () => {
  const numbers = [10, 20, 30, 40, 50];
  const result = numbers.filter((num) => num > 25);
  return (
    <div>
      {result.map((num) => (
        <h2 key={num}>{num}</h2>
      ))}
    </div>
  );
};

export default App;
