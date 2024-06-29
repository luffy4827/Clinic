import React, { useState } from "react";
import gallery1 from "../assets/Gallery/a.jpg";
import gallery2 from "../assets/Gallery/b.jpg";
import gallery3 from "../assets/Gallery/c.jpg";
import gallery4 from "../assets/Gallery/d.jpg";
import gallery5 from "../assets/Gallery/e.jpg";
import gallery6 from "../assets/Gallery/f.jpg";
import gallery7 from "../assets/Gallery/g.jpg";
import gallery8 from "../assets/Gallery/h.jpg";
import gallery9 from "../assets/Lab Photos/Digital X-Ray.jpg";
import gallery10 from "../assets/Lab Photos/ECG.jpg";
import gallery11 from "../assets/Camp Photos/3.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div>
        <p className="text-blue-400 font-bold text-5xl mb-5">Gallery</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className=" h-[100%] object-cover w-full rounded-lg cursor-pointer"
              src={image}
              alt={`Gallery ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-screen max-w-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
