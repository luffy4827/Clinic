import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import call from "../assets/call.png";
import whatsapp from "../assets/whats.png";

const Navbar = () => {
  const phoneNumber = "+9779862781599";
  const message = "Hello, I have some queries that i want to talk.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container bg-slate-100 mx-auto md:px-20 px-4 sticky top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-slate-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="text-2xl lg:text-3xl font-bold cursor-pointer text-sky-500">
            Sunapati Polyclinic
          </Link>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/*button */}
          <div className="flex justify-center items-center">
            <Link
              to="tel:015201929"
              className="inline-block font-bold py-2 px-4 rounded-xl transition duration-300"
            >
              <img src={call} className="w-5 h-5" alt="" />
            </Link>
            <Link
              to={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold py-2 px-4 rounded-xl transition duration-300"
            >
              <img src={whatsapp} className="w-6 h-6" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
