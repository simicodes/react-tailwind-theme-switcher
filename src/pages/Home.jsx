import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center pb-16 md:flex-row md:items-center md:justify-between">
      <div className="h-1/3 md:h-auto md:flex-1">
        <img
          className="h-[100%]"
          src="img/glass-of-wine.png"
          alt="glass-of-wine"
        />
      </div>
      <div className="p-4 mt-4 md:flex-1">
        <h2 className="font-black text-4xl md:text-6xl lg:text-8xl">
          Red Wine
        </h2>
        <p className="font-black">-- dark, sweet flavor</p>
        <p className="font-medium text-xl mt-4 mb-8">
          "If we sip wine, we find dreams coming upon us out of the imminent
          night." - D.H Lawrence
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="border-2 border-current font-black pt-1 pb-1 pl-6 pr-6 rounded-sm"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
