import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.unshift({title, detail});
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="flex sticky top-0 left-0 justify-center gap-15 items-center p-8 z-10 bg-black"
      >

        <div className="flex gap-4 not-lg:w-full w-1/2 items-start flex-col">
          <input 
            className="px-5 font-medium outline-none w-full py-2 border-2 rounded"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="px-5 font-medium outline-none w-full h-30 py-2 border-2 rounded"
            type="text"
            placeholder="Write Details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <button className="bg-white active:scale-[0.97] font-medium outline-none w-full text-black cursor-pointer px-5 py-2 rounded">
            Add Notes
          </button>
        </div>

        <img
          className="h-60 not-lg:hidden rotate-y-180"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="notes png image"
        />
      </form>

      <div className="pb-10 flex gap-6 flex-wrap max-w-[80%] m-auto justify-center items-center">
        {task.map((elem, idx) => {
          return <div key={idx} className="h-65 w-53 text-white rounded-2xl p-4 relative
          bg-[url(https://img.freepik.com/free-vector/abstract-perspective-graph-pattern-grid-vector-design_1017-45232.jpg)]">
            <h2 onClick={() => {
              deleteNote(idx);
            }} className="absolute right-4 top-4 cursor-pointer active:scale-[0.95]">{<X size={32} strokeWidth={2.75} />}</h2>
            <h3 className="text-2xl font-bold leading-tight mb-1">{elem.title}</h3>
            <p className="text-xl leading-tight">{elem.detail}</p>
            </div>;
        })}
      </div>

    </div>
  );
};

export default App;