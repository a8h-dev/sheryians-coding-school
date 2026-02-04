import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    // useNavigate
    // router don't end here have more to study these are basics
    const navigate = useNavigate();
  return (
    <div className='flex justify-center py-3 px-5 bg-blue-900'>
      {/* use navigate */}
        <button onClick={() => {
            navigate("/");
        }} className='bg-emerald-700 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>
        <button onClick={() => {
            navigate(-1);
        }} className='bg-emerald-700 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
        <button onClick={() => {
            navigate(+1);
        }} className='bg-emerald-700 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  );
}

export default Navbar2;
