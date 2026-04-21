import React from "react";
import Sidebar from "../../explore/components/Sidebar.jsx";

const images = [
  "https://i.pinimg.com/736x/8c/5a/f4/8c5af4a7a3b7c1eaa7f63b7b4c2c4c9c.jpg",
  "https://i.pinimg.com/736x/3c/cf/c7/3ccfc7a313c18efad4b68c7a6c4c8ee3.jpg",
  "https://i.pinimg.com/736x/7f/ff/68/7fff6829e61d1924c44d8cb5a0cfbdff.jpg",
  "https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
  "https://i.pinimg.com/736x/ac/da/94/acda9434e10893bc6e26d9fd0165018b.jpg",
  "https://i.pinimg.com/736x/29/94/1f/29941f1794d1f7b7c2a586c37a129ca6.jpg",
];

const ExplorePage = () => {
  return (
    <main>
<aside><Sidebar/></aside>
    <section className="min-h-screen bg-[#f4f5f5] font-sans md:ml-20 lg:ml-64 px-4 sm:px-6 lg:px-10 py-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-6 gap-4">

        {/* SEARCH */}
        <div className="flex items-center bg-white  px-4 py-2 rounded-md w-full max-w-xl">
          <i className="ri-search-line text-gray-400 mr-2"></i>
          <input
            type="text"
            placeholder="DISCOVER NEW PERSPECTIVES..."
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          {/* <i className="ri-settings-3-line text-xl cursor-pointer"></i>
          <i className="ri-logout-box-r-line text-xl cursor-pointer"></i> */}

          <img
            src="https://i.pinimg.com/736x/91/cd/b9/91cdb978fc4613644e4b7822878cf301.jpg"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-6 mb-8 overflow-x-auto text-sm">

        <button className="bg-gray-200 px-4 py-1.5 rounded-full whitespace-nowrap">
          Recommended
        </button>

        {[
          "Architectural",
          "Monochrome",
          "Nature’s Brutalism",
          "Quiet Moments",
          "Abstract Flow",
        ].map((tab, i) => (
          <button key={i} className="text-gray-600 whitespace-nowrap">
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-white">
            <img
              src={img}
              className="w-full h-64 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
          REVEAL MORE ↓
        </button>
      </div>

    </section>
    </main>
  );
};

export default ExplorePage;