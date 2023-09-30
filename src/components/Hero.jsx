import React from 'react';
import Line from '../assets/heroline.png';
import Heroimg from '../assets/heroimg.png';
import Img from '../assets/i1.png';
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';

const Hero = () => {
  return (
    <div className="text-white bg-black h-auto max-xl:w-[100%] flex justify-center gap-40 ">
      <div className=" mt-40">
        <img src={Line} alt="line" />
        <h1 className="text-[48px] font-bold mt-4">
          Unlocking the Full <br /> Potential Of Daos with <br /> Artificial
          Intelligence
        </h1>
        <p className="text-[24px] font-semibold mt-8">
          Empower DeFi Governance with AI-Powered Decisions
        </p>

        <div className="flex gap-24 justify-start ml-8 mt-16 ">
          <button className="button z-50 border-yellow-200 flex items-center gap-1 bg-gradient-to-r from-[#BD8928]  to-[#795B20] hover:bg-gradient-to-br w-fit text-[#f0f0f0] hover:text-white text-[24px] py-3.5 px-5 rounded-md font-[500]">
            Try DIAG
          </button>
          <button className="button border-yellow-200 flex items-center gap-1 bg-[#353333cf] hover:bg-[#BD8928] w-fit text-[#f0f0f0] hover:text-white text-[24px] py-3.5 px-5 rounded-md font-[500]">
            Whitepaper
          </button>
        </div>

        <div className="mt-24">
          <h1 className="text-[24px] font-semibold ">OVERVIEW</h1>

          <div className="gap-5 flex flex-col mt-8">
            <div className="flex gap-6">
              <p className="text-[20px] font-semibold bg-[#3533337d] tracking-wider py-1 pl-3 pr-24 leading-loose">
                AI-Driven Proposal <br />
                Analysis
              </p>
              <p className="text-[20px] font-semibold bg-[#3533337d] tracking-wider py-1 pl-3 pr-32 leading-loose">
                {' '}
                Proposal <br />
                Ranking
              </p>
            </div>
            <div className="flex gap-8">
              <p className="text-[20px] font-semibold bg-[#3533337d] tracking-wider py-1 pl-3 pr-24 leading-loose">
                Token-Based <br />
                Voting
              </p>
              <p className="text-[20px] font-semibold bg-[#3533337d] tracking-wider py-1 pl-3 pr-24 leading-loose">
                Voting <br /> Recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={Heroimg}
        alt="heroimg"
        className="z-50 ml-24 w-[600px] h-[1000px]"
      />
      <img src={Img} className="absolute  top-40" />
      <img src={e1} className="absolute  bottom-80 ml-80" />
      <img src={e2} className="absolute bottom-64 left-40 " />
      <img src={e3} className="absolute  bottom-72 right-60" />
    </div>
  );
};

export default Hero;
