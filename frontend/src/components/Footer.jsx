import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">3d Sustainable Architecture</p>
            <p className="text-sm">Creating a sustainable future</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} 3d Sustainable Architecture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
