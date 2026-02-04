import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-500 py-4 px-8 items-center'>
      <h2 className='text-2xl font-bold'>A8H</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-semibold' to='/'>Home</Link>
        <Link className='text-lg font-semibold' to='/about'>About</Link>
        <Link className='text-lg font-semibold' to='/contact'>Contact</Link>
        <Link className='text-lg font-semibold' to='/product'>Product</Link>
      </div>;
    </div>
  );
}

export default Navbar;
