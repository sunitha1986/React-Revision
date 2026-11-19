import React from "react";

const Child = ({ count, setCount }) => {
  const handleChildClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Child: {count}</div>
      <button onClick={handleChildClick}>Increment +1</button>
    </div>
  );
};

export default Child;
