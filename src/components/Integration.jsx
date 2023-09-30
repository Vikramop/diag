import React from 'react';
import Tick from '../assets/tick.png';

const Integration = () => {
  return (
    <div className="text-white">
      <div>
        <h1>AI Integration</h1>
        <p>
          Daig integrates advanced AI, including NLP and <br /> ML, for proposal
          analysis, personalized <br />
          recommendations, and adaptive learning.
        </p>
        <div>
          <div>
            <img src={Tick} alt="tick" width="20px" />
            <p> Artificial Intelligence</p>
          </div>
          <div>
            <img src={Tick} alt="tick" width="20px" />
            <p> Machine Learning</p>
          </div>
          <div>
            <img src={Tick} alt="tick" width="20px" />
            <p> Natural Language Processing</p>
          </div>
        </div>
        <div>
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
