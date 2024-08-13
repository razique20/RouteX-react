import React from 'react';
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { IoRocketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-12 py-8 md:py-12 px-4 md:px-6 lg:px-12'>
      
      <div className='grid grid-cols-2 gap-3 lg:gap-4 lg:w-1/2 mt-6 lg:mt-0'>
        <img src={image1} alt="Image 1" className='w-full h-auto object-cover rounded-md' />
        <img src={image2} alt="Image 2" className='w-full h-auto object-cover rounded-md' />
        <img src={image3} alt="Image 3" className='w-full h-auto object-cover rounded-md' />
        <img src={image4} alt="Image 4" className='w-full h-auto object-cover rounded-md' />
      </div>

      <div className='lg:w-2/3 mt-8 lg:mt-0 lg:mx-auto'>
        <p className='flex items-center gap-2 text-blue-600 font-semibold uppercase'>
          ABOUT US <IoRocketOutline />
        </p>

        <h1 className='text-2xl md:text-3xl font-bold mt-4'>Unknown Wanderlust <br /> Your Journey into</h1>

        <p className='mt-4 text-gray-700'>
          As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
        </p>

        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
          <div className='flex-1'>
            <h2 className='flex items-center text-lg md:text-xl font-semibold text-gray-800'>
              <TiTickOutline className='text-blue-600 mr-2' /> Safety Guides
            </h2>
            <p className='mt-2 text-gray-600'>
              As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
            </p>

            <button className='mt-8 px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700'>
              Read More <FaArrowRight />
            </button>
          </div>
          <div className='flex-1'>
            <h2 className='flex items-center text-lg md:text-xl font-semibold text-gray-800'>
              <TiTickOutline className='text-blue-600 mr-2' /> Passport Assistance
            </h2>
            <p className='mt-2 text-gray-600'>
              As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
