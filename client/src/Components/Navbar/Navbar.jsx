import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-custom-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Brand
        </div>
        <ul className="flex space-x-4 text-white ml-auto">
          <li><a href="#home" className="mx-4 hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="mx-4 hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="mx-4 hover:text-gray-300">Contact</a></li>
          <li><a href="#join" className="mx-4 hover:text-gray-300">Join</a></li>
          <li><a href="#login" className="mx-4 hover:text-gray-300">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
