import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({user: "Arohi", age: 18});

  const btnClicked = () => {
    setNum(prev=>({...prev, age: 50}));
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;

// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState({user: "Abhishek", age: 20});

//   const btnClicked = () => {
//     const newNum = {...num};
//     newNum.user = "Arohi";
//     newNum.age = 18;
//     setNum(newNum);
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// }

// export default App;
