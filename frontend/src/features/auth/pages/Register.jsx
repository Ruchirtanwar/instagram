import React, { useState } from "react";
import registerImg from "/src/assets/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
    fullname: "",
    username: "",
    email: "",
    password: "",
  })
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
  };

  return (
    <main className="flex h-screen">
      
      {/* LEFT SIDE */}
      <section
        className="w-1/2 hidden md:flex flex-col justify-between p-10 bg-cover  font-manrope  bg-center relative"
        style={{ backgroundImage: `url(${registerImg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <header className="relative z-10 text-sm tracking-widest text-white ">
          EST. 2026
        </header>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white leading-tight">
            CURATE <br /> YOUR <br /> SILENCE.
          </h1>

          <p className="mt-6 text-white max-w-md">
            Join a sanctuary of digital minimalism. Share what matters, minus
            the noise.
          </p>
        </div>

        <footer className="relative z-10 text-xs text-white">
          FINE ART DIGITAL CURATION
        </footer>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full md:w-1/2 flex items-center font-serif justify-center bg-[#f8f8f8] px-6">
        <div className="w-full max-w-md">
          
          {/* header */}
          <header className="mb-10">
            <p className="text-xs tracking-widest text-gray-500">
              THE QUIET GALLERY
            </p>
            <h1 className="text-3xl font-light mt-2">
              Create an account
            </h1>
          </header>

          {/* form */}
          <form onSubmit={onSubmitHandler} className="space-y-6">

            <div>
              <label className="text-xs tracking-widest text-gray-500">
                FULL NAME
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={onChangeHandler}
                required
                placeholder="Julianne Moore"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest text-gray-500">
                USERNAME
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={onChangeHandler}
                required
                placeholder="curator_01"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest text-gray-500">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                required
                placeholder="julianne@gallery.art"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest text-gray-500">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                required
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none focus:border-black"
              />
            </div>

            <button className="w-full bg-gray-700 text-white py-3 mt-6 hover:cursor-pointer active:scale-105 rounded-3xl hover:bg-black transition-all  ease-in-out">
              CREATE ACCOUNT
            </button>

            <div className="text-center mt-6 text-sm text-gray-500">
              Already a member?{" "}
              <Link to="/login" className="text-black font-medium">
                Log in →
              </Link>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
};

export default Register;