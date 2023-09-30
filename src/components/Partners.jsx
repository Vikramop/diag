import React from 'react';
import img from '../assets/partnersimg.png';

const Partners = () => {
  return (
    <div className=" relative mt-72 text-white bg-[#3533337d] h-[40vh]">
      <h1 className=" text-center pt-12 text-6xl font-normal">Partners</h1>
      <p className=" text-center text-8xl font-semibold mt-24 text-transparent bg-clip-text bg-gradient-to-r from-[#000000] via-[#ffffffd9] to-[#ffffff]">
        YOU CAN BE ONE!
      </p>
      <img
        src={img}
        alt="img"
        className="absolute  w-[800px] h-[450px] right-0 top-0"
      />
    </div>
  );
};

export default Partners;
