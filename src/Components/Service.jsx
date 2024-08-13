import React from 'react';
import Bg from "../assets/bg2.png";
import { IoRocketOutline } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <div className='relative w-full py-1'>
      <img src={Bg} alt="Background" className='w-full h-[60vh] md:h-[70vh] lg:h-[70vh] object-cover' />

      <div className='absolute inset-0 flex flex-col justify-center text-blue-900 px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-6 my-2'>
          <div className='text-left'>
            <p className='flex gap-2 text-lg md:text-xl font-semibold'>
              Our Service <IoRocketOutline />
            </p>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2'>
              Adventure Unleashed
            </h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2'>
              Discover Your Next
            </h1>
          </div>

          <div className='flex gap-4 mt-4 md:mt-0'>
            <FaArrowLeft className='text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-gray-300' />
            <FaArrowRight className='text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-gray-300' />
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center h-60 gap-4 md:gap-1 mt-6'>
          <div className='bg-white p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-80  md:w-72 lg:w-80 flex flex-col justify-center items-center md:h-80'>
            <IoFastFood className='text-2xl md:text-3xl text-blue-900 mb-4' />
            <h2 className='text-lg md:text-xl font-semibold mb-2'>Food and Wine Tours</h2>
            <p className='text-gray-700 text-sm md:text-base'>
              As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
            </p>
          </div>
          <div className='bg-white p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-80 md:w-72 lg:w-80 flex flex-col justify-center items-center md:h-80'>
            <IoFastFood className='text-2xl md:text-3xl text-blue-900 mb-4' />
            <h2 className='text-lg md:text-xl font-semibold mb-2'>Adventure Trips</h2>
            <p className='text-gray-700 text-sm md:text-base'>
              As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
            </p>
          </div>
          <div className='bg-white p-4 md:p-6 rounded-lg shadow-lg text-center w-full sm:w-80 md:w-72 lg:w-80 flex flex-col justify-center items-center md:h-80'>
            <IoFastFood className='text-2xl md:text-3xl text-blue-900 mb-4' />
            <h2 className='text-lg md:text-xl font-semibold mb-2'>Adventure Trips</h2>
            <p className='text-gray-700 text-sm md:text-base'>
              As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
