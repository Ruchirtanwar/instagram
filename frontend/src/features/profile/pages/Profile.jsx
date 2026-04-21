
import React from "react";
import Sidebar from "../../explore/components/Sidebar.jsx";

const Profile = () => {
  const posts = [
    "https://i.pinimg.com/736x/3c/cf/c7/3ccfc7a313c18efad4b68c7a6c4c8ee3.jpg",
    "https://i.pinimg.com/736x/7f/ff/68/7fff6829e61d1924c44d8cb5a0cfbdff.jpg",
    "https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
    "https://i.pinimg.com/736x/ac/da/94/acda9434e10893bc6e26d9fd0165018b.jpg",
    "https://i.pinimg.com/736x/29/94/1f/29941f1794d1f7b7c2a586c37a129ca6.jpg",
    "https://i.pinimg.com/736x/94/2c/1e/942c1eecea26e4ff8834600029422a5a.jpg",
  ];

  return (
    <main>
      <aside>
        <Sidebar />
      </aside>

      <section className="min-h-screen bg-[#f4f5f5] font-sans md:ml-20 lg:ml-64 px-4 sm:px-6 lg:px-10 py-6">
        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* PROFILE IMAGE */}
          <img
            src="https://i.pinimg.com/736x/91/cd/b9/91cdb978fc4613644e4b7822878cf301.jpg"
            className="w-32 h-32 rounded-xl object-cover object-top border"
          />

          {/* PROFILE INFO */}
          <div className="flex-1">
            {/* NAME + BUTTON */}
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-2xl font-semibold">Julian Vane</h1>

              <button className="px-4 py-1.5 bg-gray-200 rounded-lg text-sm hover:bg-gray-300">
                Edit Profile
              </button>

              <i className="ri-more-line text-xl cursor-pointer"></i>
            </div>

            {/* STATS */}
            <div className="flex gap-6 mt-4 text-sm">
              <p>
                <span className="font-semibold">42</span> Exhibitions
              </p>
              <p>
                <span className="font-semibold">12.8k</span> Curators
              </p>
              <p>
                <span className="font-semibold">892</span> Following
              </p>
            </div>

            {/* BIO */}
            <div className="mt-4 text-sm text-gray-700 max-w-xl">
              <p className="font-medium">Visual Curator & Architect</p>
              <p className="mt-1 text-gray-500">
                Exploring the intersection of brutalist architecture and organic
                minimalism. Curating spaces that breathe. Based in Tokyo.
              </p>
              <p className="mt-1 text-gray-500">vane-editorial.com</p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-10 border-t pt-4 flex justify-center gap-10 text-sm text-gray-500">
          <div className="flex items-center gap-2 text-black border-b-2 border-black pb-2">
            <i className="ri-grid-line"></i>
            POSTS
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-bookmark-line"></i>
            SAVED
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-user-line"></i>
            TAGGED
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                className="w-full h-72 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
