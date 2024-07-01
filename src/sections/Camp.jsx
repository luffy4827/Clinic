import React from "react";
import camp3 from "../assets/Camp Photos/10.jpg";
import { Link } from "react-router-dom";

const Camp = () => {
  return (
    <div className="bg-blue-100 h-[80vh] w-screen ">
      <div className="p-3 flex-col md:flex-row h-full flex justify-center items-center md:mx-10 my-11">
        <div className="md:w-[40%] mt-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Health <span className="text-blue-400">Camp</span>
          </h1>
          <p className="text-xl py-6">Health camp conducted successfully.</p>
          <Link to="/gallery">
            <button className="mt-5 btn btn-outline btn-info">
              Watch All Photos
            </button>
          </Link>
        </div>

        <div className="md:w-[60%] md:h-full md:py-10">
          <img
            src={camp3}
            className="w-full h-full object-cover"
            alt="Health Camp"
          />
        </div>
      </div>
    </div>
  );
};

export default Camp;
