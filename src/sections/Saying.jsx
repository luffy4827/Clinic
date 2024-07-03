import React from "react";
import chairman from "../assets/Chairman & Team/Jivan Kumar KC.jpg";


const Saying = () => {
  return (
    <div className="max-w-[1400px] m-auto mt-10 py-5 px-4 bg-hero ">
      <div className="flex flex-col lg:mx-16 h-full justify-center items-center">
        <h3 className="text-5xl md:text-6xl font-bold text-center">
        Hear From  <span className="text-sky-500">Our Chairman</span>
        </h3>
        <p className="text-lg md:text-2xl py-6 text-justify">
        In this exciting new chapter, I’m thrilled to connect with you directly. As Chairman, I’m incredibly proud of our team’s dedication to providing Nepal’s best healthcare service. We’re committed to offering comprehensive OPD services, advanced diagnostic tools like ECG and X-ray, a full suite of pathology testing, and even specialized Foreign Employment Health Checkups – all designed to ensure your complete well-being. We believe in a patient-centred approach, and I encourage you to explore the exceptional care we offer. Let’s build a healthier future, together.
        </p>
        <div className="flex flex-col items-center justify-center">
          <img src={chairman} className="w-36 h-36 rounded-full" alt="" />
          <p className="text-xl font-bold" > Jivan Kumar KC</p> <br />
          <p className="text-lg">Chairman</p>
        </div>
      </div>
    </div>
  );
};

export default Saying;
