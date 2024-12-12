import React from "react";

const DestinationCard = ({ image, title, rating, activities, price }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        {/* Rating */}
        <div className="absolute top-2 left-2 bg-white/50 text-customOrange font-semibold text-sm px-2 py-1 backdrop-blur-sm rounded">
          {rating}
        </div>

        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-gradient-to-b from-transparent to-white/90 shadow-md p-2 backdrop-blur-sm rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-customOrange"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>

      {/* Details Section */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{activities}</p>
        
      </div>
    </div>
  );
};

export default DestinationCard;
