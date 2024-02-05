import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed w-full z-20 top-0 start-0 drop-shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
						{/* <img src="MetaBlocks-logos_black.png" class="h-20" alt="Logo" /> */}
						<span class="p-5 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">METABLOCKS</span>
					</a>
        <div className="flex space-x-4 text-xl">
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
