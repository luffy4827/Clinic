import React from "react";

const Card = ({ imgURL, label, subtext, post }) => {
  return (
    <div className="card w-[400px] bg-base-100 dark:bg-slate-700 shadow-xl">
      <figure className="bg-gray-300 overflow-hidden">
        <img
          src={imgURL}
          alt="photos"
          className="w-full h-96 object-cover object-top"
        />
      </figure>
      <div className="card-body bg-gray-200 text-black dark:bg-slate-600 dark:text-white">
        <h2 className="card-title">{label}</h2>
        <p className="font-bold text-gray-600">{post}</p>
        <p className="text-gray-500">
          {subtext} <br />
        </p>
      </div>
    </div>
  );
};

export default Card;
