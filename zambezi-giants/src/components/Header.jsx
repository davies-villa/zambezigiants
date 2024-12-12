import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-cover bg-center bg-no-repeat h-screen">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Africa with Us
        </h1>

        {/* Paragraph */}
        <p className="text-md md:text-xl max-w-2xl mb-8">
          Discover breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories.
        </p>

        {/* Search Bar */}
        <div className="w-full bg-customGrey p-3 rounded-full max-w-lg">
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search destinations..."
              className="flex-grow p-3 rounded-l-md text-sm bg-transparent text-black placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-customOrange text-white p-3 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
