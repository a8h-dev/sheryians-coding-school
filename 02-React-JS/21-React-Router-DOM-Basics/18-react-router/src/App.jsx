import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Product from './pages/Product';

const App = () => {
  // react-router-dom -> library
  // Browser router 90% times
  // SPA -> Single Page Application
  
  // this is basic setup
  // more to study like:
  // nested routes
  // dynamic routes
  // use navigate
  // 404 page

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;