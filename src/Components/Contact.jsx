import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import Bg from "../assets/lastbg.png";

const Contact = () => {
  return (
    <div className="relative w-full">
      <img src={Bg} alt="Background" className="w-full h-[35vh] object-cover opacity-80" />
      
      <div className="absolute inset-0">

        <div className="flex flex-col md:flex-row text-white px-6 md:px-10 py-10">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <MdFlightTakeoff
                aria-label="RouteX Logo"
                className="text-2xl text-blue-600"
              />
              <h2 className="ml-2 text-xl font-bold">RouteX</h2>
            </div>
            <p className="mb-4">
              Corporate business typically refers to large-scale enterprises.
            </p>
            <div className="flex gap-4">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaPinterest className="cursor-pointer hover:text-red-600" />
            </div>
          </div>

          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Service Menu</h2>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Mistakes To Avoid
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Your Startup
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Knew About Fonts
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Mistakes to Avoid
            </p>
          </div>

          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Mistakes To Avoid
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Your Startup
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Knew About Fonts
            </p>
            <p className="mb-2 flex items-center">
              <TiTick className="text-blue-900 mr-2" />
              Mistakes to Avoid
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2">
              <img src={img1} alt="Gallery Image 1" className="h-20 w-full object-cover" />
              <img src={img2} alt="Gallery Image 2" className="h-20 w-full object-cover" />
              <img src={img3} alt="Gallery Image 3" className="h-20 w-full object-cover" />
              <img src={img4} alt="Gallery Image 4" className="h-20 w-full object-cover" />
            </div>
          </div>
        </div>

        <hr className="mt-7 opacity-25 mx-2" />
        
        <div className="text-white flex flex-col md:flex-row justify-between mt-3 px-2 mx-6 text-center md:text-left">
          <p>&copy; RRDevs 2024! All RIGHTS RESERVED</p>
          <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-start">
            <p>Terms & Service</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
