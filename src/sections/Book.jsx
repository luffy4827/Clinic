import React from "react";
import book2 from "../assets/Gallery/d.jpg";
import book1 from "../assets/Lab Photos/Pathology Lab.jpg";
import book3 from "../assets/Lab Photos/Digital X-Ray.jpg";
import book4 from "../assets/Gallery/a.jpg";
import book5 from "../assets/Gallery/c.jpg";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={book1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={book2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={book3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={book4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={book5}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Book Your <span className="text-blue-400">Appointment</span>
        </h3>
        <p className="text-xl py-6">
          For any OPD services, senior doctor consultant, whole body check up,
          foreign employment medical examination, X-Ray, ECG, and any health
          related queries call or email us to book your appointment in the given
          contact details below.
        </p>
        <div className="flex gap-3">
          <Link to="https://bit.ly/3RJCFDh" target="blank">
            <button className="btn btn-outline btn-info">Learn More</button>
          </Link>
          <Link to='/contact'>
            <button className="btn btn-info text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
