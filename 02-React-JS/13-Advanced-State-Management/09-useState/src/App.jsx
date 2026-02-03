import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num + 1);
  }

  function decreaseNum(){
    setNum(num - 1);
  }

  function jumpBy5(){
    setNum(num + 5);
  }

  function resetNum(){
    setNum(0);
  }

  return (
    <div className="container">
      <div className="counter">
        <h1>{num}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={jumpBy5}>Jump by 5</button>
        <button onClick={resetNum}>Reset</button>
      </div>
    </div>
  );
};

export default App;
