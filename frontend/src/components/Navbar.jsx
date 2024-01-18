import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">3d Sustainable Architecture</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Projects</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
