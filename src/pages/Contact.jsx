import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  // const phoneNumber = "+1234567890";
  // const message = "Hello, I would like to get in touch with you.";

  // const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  //     <a
  //     href={whatsappURL}
  //     target="_blank"
  //     rel="noopener noreferrer"
  //     className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
  //   >
  //     Message on WhatsApp
  //   </a>
  return (
    <section class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                    Monday - Friday: 7:00AM — 7:00PM
                  </p>
                  <p class="mt-1 text-gray-600">Saturday: 7:00AM to 10:00PM</p>
                  <p class="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                  <p class="mt-1 text-gray-600">Email: info@example.com</p>
                  <p class="mt-1 text-gray-600">
                    Phone: +01-5201929, 9862781599
                  </p>
                  <Link
                    to="tel:+9779845176825"
                    className="inline-block bg-blue-500 text-white font-bold py-2 px-4 mt-5 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Call Now
                  </Link>
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
