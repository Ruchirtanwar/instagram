import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <main>
      <aside className="
  hidden md:flex flex-col justify-between 
  fixed top-0 left-0 h-screen
  w-20 lg:w-64 
  px-3 lg:px-6 py-6 lg:py-8 
  border-r border-gray-200 font-sans 
">

  <div>
    {/* HEADER */}
    <header className="mb-8 lg:mb-10">
      <h1 className="hidden lg:block text-lg font-semibold">
        Quiet Gallery
      </h1>
      <p className="hidden lg:block text-xs text-gray-500">
        EDITORIAL SPACE
      </p>
    </header>

    {/* MENU */}
    <ul className="space-y-6 text-gray-700 text-lg lg:text-sm">
      
     <li className="flex items-center gap-3 justify-center lg:justify-start">
        <i className="ri-home-6-fill text-xl"></i>
        <Link to="/home">
        <span className="hidden lg:inline">Home</span>
        </Link>
      
      </li> 

      <li className="flex items-center gap-3 justify-center lg:justify-start">
        <i className="ri-search-line text-xl"></i>
        <Link to="/explore">
        <span className="hidden lg:inline">Search</span>
        </Link>
      </li>

      <li className="flex items-center gap-3 justify-center lg:justify-start">
              <i className="ri-multi-image-fill text-xl"></i>

<Link to="/explore">
        <span className="hidden lg:inline">Exhibition</span>
        </Link>      </li>

      <li className="flex items-center gap-3 justify-center lg:justify-start">
        <i className="ri-chat-3-fill text-xl"></i>
        <span className="hidden lg:inline">Chats</span>
      </li>

      <li className="flex items-center gap-3 justify-center lg:justify-start">
        <i className="ri-shield-user-fill text-xl"></i>
        <Link to="/profile">
        <span className="hidden lg:inline">Profile</span>
        </Link>
      </li>

      <li className="flex items-center gap-3 justify-center lg:justify-start">
        <i className="ri-settings-5-fill text-xl"></i>
        <Link to="/setting">
        <span className="hidden lg:inline">Settings</span>
        </Link>
      </li>

    </ul>
  </div>

  {/* BUTTON */}
  <button className="bg-gray-700 text-white py-2 rounded-2xl text-sm hover:scale-95 transition">
    <span className="hidden lg:inline">Logout</span>
    <i className="ri-logout-box-r-line text-xl lg:hidden"></i>
  </button>

</aside>
   </main>
  )
}

export default Sidebar