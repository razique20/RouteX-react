import React, { useState } from "react";
import {
  MdClose,
  MdFlightTakeoff,
  MdMenu,
  MdOutlineMessage,
} from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center py-4 px-6 lg:px-8 bg-white shadow-md">
      <div className="flex items-center w-full lg:w-auto">
        <MdFlightTakeoff
          aria-label="RouteX Logo"
          className="text-xl lg:text-2xl text-blue-600"
        />
        <h2 className="ml-2 text-lg lg:text-xl font-bold">RouteX</h2>
      </div>

      {/* Toggle Button for Small Devices */}
      <button
        className="lg:hidden flex items-center text-blue-600"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <MdMenu className="text-2xl" />
        )}
      </button>

      {/* Menu Items */}
      <div
        className={`lg:flex ${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:w-auto`}
      >
        <ul
          className={`flex flex-col lg:flex-row gap-4 lg:gap-6 text-gray-700 font-semibold ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li className="hover:text-blue-600 cursor-pointer">HOME</li>
          <li className="hover:text-blue-600 cursor-pointer">ABOUT US</li>
          <li className="hover:text-blue-600 cursor-pointer">STORY</li>
          <li className="hover:text-blue-600 cursor-pointer">VISA</li>
          <li className="hover:text-blue-600 cursor-pointer">BLOG</li>
          <li className="hover:text-blue-600 cursor-pointer">PAGE</li>
          <li className="hover:text-blue-600 cursor-pointer">CONTACT</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-2 w-full lg:w-auto">
        <MdOutlineMessage
          aria-label="Need Help Icon"
          className="text-xl lg:text-2xl text-blue-600"
        />
        <div>
          <p className="text-xs lg:text-sm font-medium text-gray-700">
            Need Help
          </p>
          <p className="text-sm lg:text-base font-bold text-gray-900">
            (307) 555-0133
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
