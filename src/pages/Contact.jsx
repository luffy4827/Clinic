import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumber = "+9779862781599";
  const message = "Hello, I have some queries that i want to talk.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <section class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Stop by our convenient location for all your healthcare needs!
          </p>
        </div>
        <div class="mt-16 lg:mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5600161054167!2d85.3340900754014!3d27.669081327178255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dc4b3650ff%3A0xcdc5b03b9349f7e1!2sSunapati%20Polyclinic%20%26%20Health%20Care%20Pvt%20Ltd.!5e0!3m2!1sen!2snp!4v1719560672372!5m2!1sen!2snp"
                width="100%"
                height="480"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
            <div>
              <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                <div class="px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                  <p class="mt-1 text-gray-600">
                    Balkumari, Lalitpur, Nepal, Harit Colony way{" "}
                  </p>
                </div>
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                  <p class="mt-1 text-gray-600">
                    Sunday - Friday: 7:00AM — 7:00PM
                  </p>
                  <p class="mt-1 text-gray-600">Saturday: 7:00AM to 10:00AM</p>
                </div>
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                  <p class="mt-1 text-gray-600">
                    Email: sunapatipolyclinic@gmail.com
                  </p>
                  <p class="mt-1 text-gray-600">
                    Phone: +01-5201929, 9862781599
                  </p>
                  <div className=" flex gap-4 mt-3">
                    <Link
                      to={whatsappURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-outline btn-info text-white">
                        Message on WhatsApp
                      </button>
                    </Link>
                    <Link to="tel:+9779845176825">
                      <button className="btn btn-info text-white">
                        Call Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
