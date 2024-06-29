import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
        {/* Shadow overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white z-20">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="text-xl">Welcome to</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Nepal’s Best Health care service
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
          For all your medical needs, visit us, the leader in Nepal’s healthcare! We offer comprehensive OPD services, advanced ECG, X-ray, complete pathology testing, and specialized Foreign Employment Health Checkups – all under one roof.
          </p>
          <button className="btn btn-info text-white mt-5">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
