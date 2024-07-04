import React from "react";
import camp3 from "../assets/Foreign Employment.jpg";

const Camp = () => {
  return (
    <div className="bg-blue-100 lg:h-[80vh] w-screen ">
      <div className="p-3 flex-col md:flex-row h-full flex justify-center items-center md:mx-10">
        <div className="md:w-[40%] mt-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Foreign Employment <br />
            <span className="text-sky-500"> Health Checkup</span>
          </h1>
          <p className="text-xl py-6">
            Our Outpatient Department (OPD) is equipped to conduct
            pre-employment health checkups for individuals seeking foreign
            employment opportunities. We are compliant with the regulations of
            108 countries, ensuring a smooth and efficient process for your
            international job pursuit.
          </p>
        </div>

        <div className="md:w-[60%] md:h-full md:py-10">
          <img
            src={camp3}
            className="w-full h-full object-fit"
            alt="Foreign Employment"
          />
        </div>
      </div>
    </div>
  );
};

export default Camp;
