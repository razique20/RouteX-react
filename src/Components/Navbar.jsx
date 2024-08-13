import React from 'react';
import { MdOutlineMessage, MdFlightTakeoff } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center py-4 px-6 lg:px-8 bg-white shadow-md'>
      <div className='flex items-center'>
        <MdFlightTakeoff aria-label="RouteX Logo" className='text-xl lg:text-2xl text-blue-600'/>
        <h2 className='ml-2 text-lg lg:text-xl font-bold'>RouteX</h2>
      </div>
      
      <div>
        <ul className='flex flex-wrap gap-4 lg:gap-6 text-gray-700 font-semibold'>
          <li className='hover:text-blue-600 cursor-pointer'>HOME</li>
          <li className='hover:text-blue-600 cursor-pointer'>ABOUT US</li>
          <li className='hover:text-blue-600 cursor-pointer'>STORY</li>
          <li className='hover:text-blue-600 cursor-pointer'>VISA</li>
          <li className='hover:text-blue-600 cursor-pointer'>BLOG</li>
          <li className='hover:text-blue-600 cursor-pointer'>PAGE</li>
          <li className='hover:text-blue-600 cursor-pointer'>CONTACT</li>
        </ul>
      </div>
      
      <div className='flex items-center gap-2'>
        <MdOutlineMessage aria-label="Need Help Icon" className='text-xl lg:text-2xl text-blue-600'/>
        <div>
          <p className='text-xs lg:text-sm font-medium text-gray-700'>Need Help</p>
          <p className='text-sm lg:text-base font-bold text-gray-900'>(307) 555-0133</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
