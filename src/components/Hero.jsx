import React from 'react';
import hero from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div 
      className='border border-gray-300 shadow-2xl h-[450px] rounded-md bg-cyan-200'
      style={{ 
        backgroundImage: `url(${hero})`,
        backgroundSize: 'auto 100%', // Adjust as needed
        backgroundPosition: 'right', // Equivalent to bg-right
        backgroundRepeat: 'no-repeat', // Equivalent to bg-no-repeat
      }}
    >
      <div className='w-[350px] md:w-[600px] absolute top-[300px] left-32 md:top-60  md:left-40'>
        <h2 className='font-semibold text-sm md:text-2xl text-[#0e1f2e] md:text-[#4B5966]'>Welcome to <span className='text-[#5CAF90]'>Essence</span>  where style meets comfort! Discover the latest trends, timeless classics, and everything in between in our carefully curated collection. </h2>
        <button className="btn btn-active  bg-[#5CAF90] text-white font-bold text-sm md:text-xl md:my-5 my-2  translate-x-24 md:translate-x-0">Shop now</button>
      </div>
    </div>
  );
};

export default Hero;