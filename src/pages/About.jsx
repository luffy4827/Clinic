import React from "react";
import about1 from "../assets/Chairman & Team/Jivan Kumar KC.jpg";
import about2 from "../assets/Chairman & Team/Rekha Paudel.jpg";
import about3 from "../assets/Chairman & Team/Rojan Dallakoti.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="overflow-hidden mx-5 md:mx-10 py-5 lg:px-20 bg-white ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      // src={about2}
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      // src={about3}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      // src={about1}
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-3xl font-bold text-blue-400">
                  Why Choose Us
                </span>
                {/* <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2> */}
                <p className="mb-5 text-base text-body-color ">
                  Welcome to Sunapati Polyclinic and Health Center Pvt Ltd, your
                  premier destination for top-notch healthcare services. We are
                  dedicated to providing comprehensive and high-quality medical
                  care tailored to meet the diverse needs of our community. Our
                  clinic offers an extensive range of services, including
                  Outpatient Department (OPD) consultations, specialized Foreign
                  Employment Medical Checkups, and a full spectrum of Pathology
                  services. We pride ourselves on having experienced senior
                  doctors available for counseling and expert advice, along with
                  state-of-the-art diagnostic tools like Digital X-Ray and ECG
                  to ensure precise health assessments.
                </p>
                <p className="mb-8 text-base text-body-color">
                  At Sunapati Polyclinic, we believe that exceptional healthcare
                  goes hand in hand with outstanding customer service. Our
                  friendly and professional staff are committed to making your
                  visit as comfortable and efficient as possible. From the
                  moment you walk through our doors, you will experience a
                  welcoming environment where your health and well-being are our
                  top priorities. We take the time to listen to your concerns,
                  provide personalized care, and ensure that you fully
                  understand your treatment options.
                </p>
                <button className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-blue-500 hover:bg-opacity-90">
                  <Link to="/contact" >Book Appointment</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
