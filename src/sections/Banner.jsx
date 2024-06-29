import React from "react";
import banner from "../assets/Gallery/banner3.jpg";

const Banner = () => {
  return (
    <div className=" bg-gray-100 w-screen h-[80vh] flex  justify-center items-center">
      <div className=" p-3 flex flex-col md:flex-row md:mx-10 my-11">
        <div className="md:w-[40%] mt-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Whole <br /> <span className="text-blue-400">Body Check Up</span> 
          </h1>
          <p className="text-xl py-6">
            Uncover a complete picture of your health with our discounted
            whole-body checkup! This comprehensive assessment utilizes advanced,
            fully automated machines for a range of pathology tests, a painless
            ECG to analyse your heart’s rhythm, and a digital X-ray for clear
            internal imaging – all at an exceptional price.
          </p>
        </div>

        <div className="md:w-[60%]">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
