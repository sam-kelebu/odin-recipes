import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './Component/About'; 
import Contact from './Component/Contact'; 
import Service from './Component/Service'; 
import Front from './Component/front'
import Middle from './Component/Middle';
import './index.css';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <nav className='flex flex-col'>
        <div className='bg-slate-800 px-6 py-5  text-white flex justify-between items-center '>
          <h1 className='text-white text-[24px] ml-3'> <Link to="/">Header Logo</Link></h1>
          <ul className='text-white flex '>
            <li>
              <Link to="/about" className='mr-20 hover:text-gray-300'>header link one</Link>
            </li>
            <li>
              <Link to="/contact" className='mr-20 hover:text-gray-300'>header link two</Link>
            </li>
            <li>
              <Link to="/service" className='mr-20 hover:text-gray-300'>header link three</Link>
            </li>
          </ul>
        </div>
      </nav>
<Front />
<Middle />
<Footer />
      <Routes>
        <Route path="/" element={App} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;