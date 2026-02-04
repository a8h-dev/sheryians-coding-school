import React, { useEffect, useState } from 'react';

const App = () => {
  // Mounting [] -> only first render (mount)
  // Dependency array [num] -> jab value change ho
  // No dependency array -> (dangerous sometimes)

  const [num, setNum] = useState(0);

  useEffect(function(){
    console.log('useEffect is running');
  }, [])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1);
      }}>Click</button>
    </div>
  );
}

export default App;