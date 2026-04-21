import React from 'react'
const items = [{
    img:"https://i.pinimg.com/736x/7f/ff/68/7fff6829e61d1924c44d8cb5a0cfbdff.jpg",
    name:"ruchir"
},
{
    img:"https://i.pinimg.com/736x/ac/da/94/acda9434e10893bc6e26d9fd0165018b.jpg",
    name:"ruchir2"
},{
    img:"https://i.pinimg.com/736x/29/94/1f/29941f1794d1f7b7c2a586c37a129ca6.jpg",
    name:"ruchir3"
},{
    img:"https://i.pinimg.com/1200x/70/38/80/703880553b7883b4122c551581d43927.jpg",
    name:"ruchir4"
},{
    img:"https://i.pinimg.com/236x/cf/f4/fc/cff4fcf3ab8968828f497c61a72c935c.jpg",
    name:"ruchir5"
}]

const RecommendationCards = () => {
  return (
  <main>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  items-center md:flex-row sm:flex-col sm:gap-3 justify-between"
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <img
              src={item.img}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">{item.name}</p>
          </div>

          {/* RIGHT */}
          <button className="text-xs sm:pl-9 pl-9  text-gray-500 hover:text-black">
            Follow
          </button>
        </div>
      ))}
    </div>
  </main>
  )
}

export default RecommendationCards; 