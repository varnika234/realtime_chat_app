import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/skill sprote.jpeg';

const Navbar = () => {
  // State to control the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0a0f1c] text-white px-6 py-4 shadow-md font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <div className="flex items-center">
          <img
            src={Logo} //Use the imported Logo image
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-2xl font-semibold"> SkillSprout </span>
        </div>

        {/*Navigation Links*/}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>

          {/*Catalog with Dropdown*/}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer">Catalog</span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-[#0a0f1c] text-white rounded shadow-lg"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <li className="hover:bg-gray-700 px-4 py-2">
                  <Link to="/catalog/web-development">Web Development</Link>
                </li>
                <li className="hover:bg-gray-700 px-4 py-2">
                  <Link to="/catalog/data-structures">Data Structures</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="hidden md:inline-block px-4 py-2 text-gray-300 border border-gray-300 rounded hover:bg-gray-700">
            Log in
          </button>
          <button className="hidden md:inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



