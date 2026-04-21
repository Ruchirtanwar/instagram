
import React from "react";
 import Cards from "../components/Cards";
import Navbar from "../components/Navbar.jsx";
import RCcards  from "../components/RecommendationCards.jsx";
import Sidebar from "../../explore/components/Sidebar.jsx";
const Home = () => {
    
  return (
    <main className="flex bg-[#f4f5f5] min-h-screen ">
      {/* LEFT SIDEBAR */}
     <Sidebar/>

      {/* CENTER FEED */}
      <section className="flex-1 px-4 sm:px-6 lg:px-10 py-6 md:ml-20 lg:ml-64">
        <Navbar/>

        <div className="mt-6 space-y-10 max-w-2xl mx-auto">
         <Cards /> 
        </div>
      </section>

      {/* RIGHT SIDEBAR */}
     <aside className="hidden md:block w-72 lg:w-80 px-4 md:px-6 py-6 md:py-8 border-l border-gray-200 font-serif">

  {/* Recommendations */}
  <div>
    <h2 className="text-xs tracking-widest text-gray-500 mb-4 md:mb-6">
      RECOMMENDED CURATORS
    </h2>

    <div className="space-y-3 md:space-y-4">
      <RCcards />
    </div>
  </div>

  {/* Exhibition Card */}
  <div className="mt-8 md:mt-10 bg-white p-3 md:p-4 rounded-lg shadow-sm">
    
    <h3 className="text-xs tracking-widest text-gray-500 mb-2 md:mb-3">
      CURRENT EXHIBITION
    </h3>

    <img
      src="https://i.pinimg.com/736x/3c/cf/c7/3ccfc7a313c18efad4b68c7a6c4c8ee3.jpg"
      className="w-full h-28 md:h-32 object-cover rounded-md"
    />

    <p className="mt-2 md:mt-3 text-sm font-medium">
      Monochrome Dreams
    </p>

    <p className="text-xs text-gray-500">
      Curated by The Gallery Team
    </p>

  </div>
</aside>
    </main>
  );
};

export default Home;
