
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-200">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
