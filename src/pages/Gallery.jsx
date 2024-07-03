import React, { useState } from "react";
import gallery1 from "../assets/Gallery/a.jpg";
import gallery2 from "../assets/Camp in Cage Fitness/a.jpeg";
import gallery3 from "../assets/Gallery/c.jpg";
import gallery4 from "../assets/Gallery/d.jpg";
import gallery5 from "../assets/Gallery/e.jpg";
import gallery6 from "../assets/Gallery/f.jpg";
import gallery7 from "../assets/Gallery/g.jpg";
import gallery8 from "../assets/Gallery/h.jpg";
import gallery9 from "../assets/Camp in Cage Fitness/b.jpeg";
import gallery10 from "../assets/Camp in Cage Fitness/d.jpeg";
import gallery11 from "../assets/Camp Photos/3.jpg";
import gallery12 from "../assets/Camp in Cage Fitness/e.jpeg";
import gallery13 from "../assets/Camp in Cage Fitness/f.jpeg";
import gallery14 from "../assets/Camp in Cage Fitness/g.JPEG";
import gallery15 from "../assets/Camp in Cage Fitness/h.JPEG";
import gallery16 from "../assets/Camp in Cage Fitness/i.JPEG";
import gallery17 from "../assets/Camp in Cage Fitness/j.jpeg";
import gallery18 from "../assets/Camp in Cage Fitness/k.jpeg";
import gallery19 from "../assets/Camp in Cage Fitness/l.jpeg";
import gallery20 from "../assets/Camp in Cage Fitness/m.jpeg";
import gallery21 from "../assets/Camp Photos/2.jpg";
import gallery22 from "../assets/Camp Photos/3.jpg";
import gallery23 from "../assets/Camp Photos/5.jpg";
import gallery24 from "../assets/Camp Photos/7.jpg";
import gallery25 from "../assets/Camp Photos/8.jpg";
import gallery26 from "../assets/Camp Photos/9.jpg";
import gallery27 from "../assets/Camp Photos/10.jpg";
import gallery28 from "../assets/Camp Photos/11.jpg";
import gallery29 from "../assets/Camp Photos/12.jpg";
import gallery30 from "../assets/Camp Photos/13.jpg";
import gallery31 from "../assets/Camp Photos/14.jpg";
import gallery32 from "../assets/Camp in Cage Fitness/n.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    gallery1,
    gallery2,
    gallery20,
    gallery3,
    gallery5,
    gallery13,
    gallery6,
    gallery10,
    gallery7,
    gallery9,
    gallery11,
    gallery14,
    gallery19,
    gallery4,
    gallery15,
    gallery16,
    gallery8,
    gallery17,
    gallery18,
    gallery12,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
    gallery32
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
