import React from "react";

const cardsDemoData= [
    {
        profileName:"Ruchir",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 1",
        Postimg:"https://i.pinimg.com/736x/e4/ef/64/e4ef6470db83fdd49d781fc48079521c.jpg",

    },
     {
         profileName:"Ruchir2",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 2" ,
        Postimg:"https://i.pinimg.com/736x/c4/39/58/c439587a59abba9cbcd1af8a6dc39514.jpg",

    }, {
        profileName:"Ruchi3",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 3",
        Postimg:"https://i.pinimg.com/736x/28/5b/a7/285ba7521841cfcb1e14e609545e8bf5.jpg",

    }, {
        profileName:"Ruchir4",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 4",
        Postimg:"https://i.pinimg.com/736x/50/01/79/500179c3ad44a9ce793eb8f817e6116b.jpg",

    }, {
        profileName:"Ruchir5",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 5",
        Postimg:"https://i.pinimg.com/736x/8f/d4/7f/8fd47fad7cf08d68912c384fef922ea6.jpg",

    }, {
        profileName:"Ruchir6",
        profileImg:"https://i.pinimg.com/736x/00/22/13/00221343c5febea664b7f599d42f4830.jpg",
        Bio:"architecture study 6",
        Postimg:"https://i.pinimg.com/736x/a2/99/5f/a2995fdde566a48492a79240834a28ca.jpg",

    },
]


const Cards = () => {
  return (
   <div className="space-y-6 md:space-y-8 px-3 sm:px-6 lg:px-0">

  {cardsDemoData.map((item, index) => {
    return (
      <article
        key={index}
        className="bg-white rounded-xl shadow-sm p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 max-w-xl mx-auto"
      >

        {/* HEADER */}
        <header className="flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={item.profileImg}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />

            <div>
              <h1 className="text-sm sm:text-base font-medium">
                {item.profileName}
              </h1>

              <p className="text-xs sm:text-sm text-gray-500">
                {item.Bio}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <i className="ri-more-line text-lg sm:text-xl text-gray-500 cursor-pointer"></i>
        </header>

        {/* IMAGE */}
        <section>
          <img
            src={item.Postimg}
            className="w-full   object-cover rounded-lg"
          />
        </section>

        {/* ACTIONS */}
        <div className="flex items-center justify-between">

          {/* LEFT ICONS */}
          <div className="flex gap-4 sm:gap-6 text-gray-600">
            <i className="ri-heart-3-line text-xl sm:text-2xl cursor-pointer hover:text-black"></i>
            <i className="ri-chat-3-line text-xl sm:text-2xl cursor-pointer hover:text-black"></i>
            <i className="ri-share-line text-xl sm:text-2xl cursor-pointer hover:text-black"></i>
          </div>

          {/* RIGHT ICON */}
          <i className="ri-bookmark-line text-xl sm:text-2xl text-gray-600 cursor-pointer hover:text-black"></i>
        </div>

      </article>
    );
  })}

</div> 


  );
};

export default Cards;