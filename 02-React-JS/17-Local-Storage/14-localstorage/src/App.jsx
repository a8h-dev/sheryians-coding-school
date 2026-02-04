import React, { use } from 'react';

const App = () => {
  // setItem, getItem, removeItem, clear
  // JSON.stringify, JSON.parse
  localStorage.setItem('user','Abhishek');
  const user = localStorage.getItem('user');
  console.log(user);
  return (
    <div>
      App
    </div>
  );
}

export default App;
