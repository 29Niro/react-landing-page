import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white shadow-md">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={Logo} alt="Logo" className="h-16 w-auto mr-4" />
        {/* <h1 className="text-xl md:text-3xl font-bold">DEVI WEB</h1> */}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-4`}
      >
        <Link
          to="/"
          className="block mt-4 md:mt-0 hover:bg-blue-500 hover:text-button-primary px-3 py-2 rounded-md text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/#about-us"
          className="block mt-4 md:mt-0 hover:bg-blue-500 hover:text-button-primary px-3 py-2 rounded-md text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/#services"
          className="block mt-4 md:mt-0 hover:bg-blue-500 hover:text-button-primary px-3 py-2 rounded-md text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/#technologies"
          className="block mt-4 md:mt-0 hover:bg-blue-500 hover:text-button-primary px-3 py-2 rounded-md text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Technologies
        </Link>
        <Link
          to="/coming-soon"
          className="block mt-4 md:mt-0 hover:bg-blue-500 hover:text-button-primary px-3 py-2 rounded-md text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Web Hosting
        </Link>
      </nav>
      <button
        onClick={() => {
          navigate('/contact');
        }}
        className="hidden md:block px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Contact Us
      </button>
    </header>
  );
}

export default Header;
