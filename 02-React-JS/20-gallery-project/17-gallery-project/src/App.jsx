import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  // Axios -> promise based HTTP client
  // JSON, XML -> internet me jadatar isi 2 forms me data idhr se udhr aata jata hai
  // Postman -> API Testing Platform
  // react pagination library

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h1 className="text-9xl font-bold whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300">
      Loading...
    </h1>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto w-full p-6 text-white bg-black">
      <div className="flex h-[82%] flex-wrap gap-5 justify-between">
        {printUserData}
      </div>

      <div className="flex mt-15 justify-center items-center gap-6">
        <button
        onClick={() => {
          if(index > 1){
            setIndex(index - 1);
            setUserData([]);
          }
        }}
        style={{opacity: index == 1 ? 0.5 : 1}}
        className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm active:scale-[0.95] cursor-pointer">
          Prev
        </button>
        <h1>Page: {index}</h1>
        <button
        onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }}
        className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm active:scale-[0.95] cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
