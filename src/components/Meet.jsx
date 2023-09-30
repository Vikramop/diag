import React from 'react';
import img from '../assets/bitcoindesktop.png';

const Meet = () => {
  return (
    <div className="text-white relative  gap-80 bg-black h-[70vh]">
      <div className="w-[60%]  h-[60vh]   flex flex-col justify-center items-start">
        <p className=" text-4xl ml-32 pt-32">THE FUTURE IS AI</p>
        <h1 className=" text-6xl font-bold pt-8 ml-32 text-transparent bg-clip-text bg-gradient-to-r  from-[#BD8928]  to-[#795B20]">
          Elevate Defi Governance
        </h1>
        <p className=" text-5xl pt-8 ml-32">Meet DAIG!</p>
        <p className="text-2xl pt-8 ml-32">
          Daig&apos;s AI evaluates proposals for feasibility, <br />
          alignment with goals, and risks, empowering <br />
          informed voting decisions
        </p>
      </div>
      <img
        src={img}
        alt="bitcoin img"
        className="w-[650px] absolute right-0 top-10"
      />
    </div>
  );
};

export default Meet;
