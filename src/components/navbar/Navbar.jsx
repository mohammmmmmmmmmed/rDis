import React from 'react';
import logoOne from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-gray-900  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logoOne} alt="Logo" />
            <h1 className='font-bold text-5xl text-white'>MEDICO</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4 uppercase">
            <a href="#" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              rch
            </a>
            <a href="#" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              jph
            </a>
            <a href="#" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              disease
            </a>
            <a href="#" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              contact us
            </a>
            <a href="/login">
            <button  className="ml-4 bg-gradient-to-r from-gray-200 to-cyan-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-gray-500 uppercase">
              Login
            </button>
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: x */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a href="/login" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;