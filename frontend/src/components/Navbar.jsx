import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">3d Sustainable Architecture</div>
        <div className="flex space-x-4">
          <Link to={'/'}><a href="#" className="text-white">Home</a></Link>
          <Link to={'/sus_models'}><a href="#" className="text-white">MarketPlace</a></Link>
          <Link to={'/sus_projects'}><a href="#" className="text-white">Projects</a></Link>
          <Link to={'/ar-des'}><a href="#" className="text-white">AR Design</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
