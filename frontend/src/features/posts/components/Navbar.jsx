
import React from "react";

const Navbar = () => {
 
  return (
  <header className="flex items-center justify-between py-3 px-3 sm:px-6 border-b border-gray-200">

    {/* LEFT */}
    <div>
      <h1 className="text-sm sm:text-base font-semibold tracking-wide">
        YOUR FEED
      </h1>
    </div>

    {/* CENTER (Search) */}
    <div className="hidden sm:flex items-center gap-2 bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-40 sm:w-60 md:w-80">
      <i className="ri-search-line  text-gray-400 text-sm"></i>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-xs sm:text-sm w-full"
      />
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-3 sm:gap-5">
      
      <i className="ri-search-line sm:hidden text-xl text-gray-600 cursor-pointer"></i>

      <i className="ri-notification-3-line text-lg sm:text-xl text-gray-600 cursor-pointer hover:text-black"></i>

      <img
        src="https://i.pinimg.com/1200x/91/cd/b9/91cdb978fc4613644e4b7822878cf301.jpg"
        alt="profile"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-top cursor-pointer"
      />
    </div>

  </header>
);

};

export default Navbar;