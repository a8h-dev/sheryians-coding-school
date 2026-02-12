import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";


const SearchBar = () => {

    const [text, setText] = useState('')  
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    }

  return (
    <div>
      <form
      onSubmit={(e) => {
        submitHandler(e)
      }}
      className="flex bg-gray-900 gap-5 py-8 px-10 ">

        <input
        required
        value={text}
        onChange={(val) => {
            setText(val.target.value)
        }}
        className="border-2 w-full px-4 py-2 text-xl rounded outline-none"
        type="text" placeholder='Search anything...' />

        <button className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">Search</button>

      </form>
    </div>
  );
}

export default SearchBar;
