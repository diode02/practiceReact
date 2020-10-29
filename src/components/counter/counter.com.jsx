import React, { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Pakistan");

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleMultiply = () => {
    setCount(count * 10);
  };

  return (
    <div>
      this site i s created in {count > 3 ? <h1>India</h1> : <h1>{name}</h1>}
      <br />
      {count}
      <br />
      <button onClick={handleIncrease}>increase</button>
      <br />
      <button onClick={handleDecrease}>decrease</button>
      <br />
      <button onClick={handleMultiply}>multi</button>
    </div>
  );
};

export default Couter;
