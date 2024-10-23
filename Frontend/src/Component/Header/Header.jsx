import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed: npm install js-cookie
import gupshupLogo from "../../assets/logo.png";
import logout from "../../assets/Icons/logout.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove("userToken");
    navigate("/login");
  };

  return (
    <nav className=" shadow-lg">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex flex-col md:flex-row items-center">
            <img className="w-6 md:w-12" src={gupshupLogo} alt="gupshup" />
            <div className="mt-2 md:mt-0 md:ml-4 text-m md:text-xl text-gray-600">
              Belzir Interview Challenge
            </div>
          </div>
        </Link>

        {/* Navbar menu */}
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className={`md:flex ${isMenuOpen ? 'flex-col md:flex-row' : 'hidden'} ml-4`}>
            <li className="flex items-center">
              <NavLink to="/" className={({ isActive }) => `px-3 py-2 ${isActive ? "text-black-800 underline underline-offset-8" : "text-gray-600 hover:text-blue-800"}`}>
                Home
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink to="/candidates" className={({ isActive }) => `px-3 py-2 ${isActive ? "text-black-800 underline underline-offset-8" : "text-gray-600 hover:text-blue-800"}`}>
                Candidates
              </NavLink>
            </li>
            {/* <li className="flex items-center">
              <NavLink to="/feedback" className={({ isActive }) => `px-3 py-2 ${isActive ? "text-black-800 underline underline-offset-8" : "text-gray-600 hover:text-blue-800"}`}>
                FeedbackQuestions
              </NavLink>
            </li> */}
            <li className="flex items-center">
              <NavLink to="/members" className={({ isActive }) => `px-3 py-2 ${isActive ? "text-black-800 underline underline-offset-8" : "text-gray-600 hover:text-blue-800"}`}>
                Members
              </NavLink>
            </li>
            <li className="flex items-center">
              <button onClick={handleLogout} className="px-3 py-2 flex items-center text-gray-600 hover:text-blue-800">
                Log out
                <img src={logout} alt="logout" className="ml-2" />
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
