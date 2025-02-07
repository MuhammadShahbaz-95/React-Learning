import React from 'react';
import { Link, NavLink} from 'react-router-dom'

function Navbar( ) {
  const navItems = ["Home", "BgChanger","PassGen", "About", "Contact", "Blog"];

  return (
    <div className="px-8 py-4 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] bg-white/10  border-white/20 backdrop-blur-lg rounded-full shadow-lg border">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div>
          <img className="h-12 drop-shadow-lg" src="/images/brand_logo.png" alt="logo" />
        </div>

        {/* Navigation Links */}



      <ul className="flex gap-8 text-lg font-semibold text-white">
        {navItems.map((item) => (
          <li
            key={item}
            className="relative  cursor-pointer transition duration-300 hover:text-gray-400 hover:scale-110 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-300 after:bottom-0 after:left-0 
            after:transition-all after:duration-600 hover:after:w-full"
          >
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `block px-4 py-2 ${isActive ? "text-amber-300 after:w-full" : "text-black"}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    
        {/* Login Button with 3D Effect */}
        <div>
          <button className="text-lg font-medium bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full shadow-lg transform hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-300">
            Login
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
