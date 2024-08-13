import React from 'react';
import Bg from "../assets/bg.png";

const Hero = () => {
  return (
    <div className='relative w-full'>
      <img src={Bg} alt="" className='w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover' />

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>JOURNEY WITH CONFIDENCE</h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'><span className='text-blue-600'>Migrate</span> with Us</h2>
        <p className='mt-4 text-lg md:text-xl'>Your journey starts here</p>
        <button className='mt-8 px-6 py-3 md:px-8 md:py-4 bg-blue-600 rounded-full hover:bg-blue-700'>Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
