import React from "react";
import { doctors } from "../assets/doctors";
import Card from "../components/Card";

const Doctors = () => {
  return (
    <div className="bg-[#f7f7f7]  text-black px-5 py-10 flex flex-col items-center justify-center gap-6">
      <div>
        <h1 className="text-5xl font-bold">Our <span className="text-sky-500"> Doctors Team</span></h1>
      </div>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {doctors.map((item) => (
          <Card key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
