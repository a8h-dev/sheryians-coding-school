import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  // free APIs:
  // json placeholder
  // lorem picsum

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
    
  //   console.log(data);
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json();
  //   console.log(data);
  // }

  // API calling using axios:
  // npm i axios
  // import axios from 'axios';

  // extra topics:
  // pagination
  // infinite scrolling

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
    console.log(data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3 key={idx}>{elem.name}</h3>
        })}
      </div>
    </div>
  );
}

export default App;
