import React from 'react';
import Tick from '../assets/tick.png';
import img from '../assets/integrationimg.png';

const Integration = () => {
  return (
    <div className="text-white bg-[#3533334e] py-24 gap-12 flex items-center justify-center">
      <img src={img} alt="img" className="w-[800px] " />
      <div className="w-[40%] ">
        <h1 className="text-[54px] font-semibold">AI Integration</h1>
        <p className="text-[24px] leading-tight pl-5 pt-8">
          Daig integrates advanced AI, including NLP and <br /> ML, for proposal
          analysis, personalized <br />
          recommendations, and adaptive learning.
        </p>
        <div className="pl-6 pt-12">
          <div className="flex gap-5 text-[24px]">
            <img src={Tick} alt="tick" className="w-[25px] h-[25px] mt-2" />
            <p className="text-[24px]"> Artificial Intelligence</p>
          </div>
          <div className="flex gap-5 text-[24px] py-4">
            <img src={Tick} alt="tick" className="w-[25px] h-[25px] mt-2" />
            <p> Machine Learning</p>
          </div>
          <div className="flex gap-5 text-[24px]">
            <img src={Tick} alt="tick" className="w-[25px] h-[25px] mt-2" />
            <p> Natural Language Processing</p>
          </div>
        </div>
        <div className="flex gap-10 pl-16 pt-16">
          <button className="button z-50 border-yellow-200 flex items-center gap-1 bg-gradient-to-r from-[#BD8928]  to-[#795B20] hover:bg-gradient-to-br w-fit text-[#f0f0f0] hover:text-white text-[24px] py-3.5 px-5 rounded-md font-[500]">
            Try DIAG
          </button>
          <button className="button border-yellow-200 flex items-center gap-1 bg-[#353333cf] hover:bg-[#BD8928] w-fit text-[#f0f0f0] hover:text-white text-[24px] py-3.5 px-5 rounded-md font-[500]">
            Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integration;
