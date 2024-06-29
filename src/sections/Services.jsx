import React from "react";
import f1 from "../assets/Lab Photos/Digital X-Ray.jpg";
import f2 from "../assets/Lab Photos/ECG.jpg";
import f3 from "../assets/Lab Photos/Pathology Lab.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      id="services"
      className="md:mb-24 p-8 lg:px-20 bg-white text-black"
    >
      <div className="bg-[#f7f7f7] p-5 lg:p-6 ">
        {/* heading  */}
        <div className="sm:w-3/4 lg:w-9/12 mx-auto px-2 text-justify">
          <div className="md:flex md:flex-col mb-5 md:justify-center md:items-center">
            <h1 className="text-3xl md:text-center text-blue-500 font-bold">Services</h1>
            <hr className="w-28 h-1 rounded-lg bg-blue-400 border-none" />
          </div>
          <p className="mt-4  text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            laboriosam vitae quasi aspernatur itaque voluptas, enim consequuntur
            eveniet ratione quidem consectetur ut accusantium, ducimus eos,
            fugit sunt expedita a vero?
          </p>
        </div>
        {/* feature1  */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={f3}
                alt=""
              />
            </div>
            {/* content  */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-blue-500 font-bold">Fully & Semi-Automated <br />Pathology Lab</h1>
              <p className="text-black my-4 text-justify lg:text-left sm:w-3/4 lg:w-full text-xl">
              Our pathology lab leverages both fully automated analysers for speedy and precise routine testing, and semi-automated systems to empower our technicians for specialized tasks, ensuring both rapid turnaround times and unwavering accuracy in diagnosing your health concerns
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                <Link to="">More Info</Link>
              </button>
            </div>
          </div>

          {/* rectangle  */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-r-full
            absolute
            h-56
            lg:h-80
            max-lg:h-80
            w-2/4
            -bottom-24
            -left-48
          "
          ></div>
        </div>
        {/* feature  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={f2}
                alt=""
              />
            </div>

            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-center text-blue-500 font-bold">ECG</h1>
              <p className="text-black my-4 text-justify lg:text-left sm:w-3/4 lg:w-full text-xl">
              Understanding your heart’s electrical activity is crucial for optimal health. We offer painless ECG (electrocardiogram) testing. This quick and non-invasive procedure measures your heart’s rhythm and electrical impulses, helping doctors detect potential issues like arrhythmias or heart damage. Schedule your ECG today for peace of mind.
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                <Link to="">More Info</Link>
              </button>
            </div>
          </div>

          {/* rectangle  */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-l-full
            absolute
            h-56
            lg:h-80
            w-2/4
            -bottom-24
            -right-48
          "
          ></div>
        </div>

        {/* feature  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* img  */}
            <div className="flex flex-1 justify-center object-cover z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={f1}
                alt=""
              />
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-blue-500 font-bold">Digital X-Ray</h1>
              <p className="text-black my-4 text-justify lg:text-left sm:w-3/4 lg:w-full text-xl">
              Our advanced digital X-ray technology provides superior image clarity for accurate diagnosis, minimizes radiation exposure for your safety, delivers immediate results for faster treatment plans, and contributes to a greener environment – all in a single, efficient examination.
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                <Link to="">More Info</Link>
              </button>
            </div>
          </div>

          {/* rectangle */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-r-full
            absolute
            h-56
            lg:h-80
            w-2/4
            -bottom-24
            -left-48
          "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
