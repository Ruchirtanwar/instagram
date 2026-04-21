import React, { useState } from "react";
import forgetImg from "/src/assets/forgetImg.jpg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("")
  };

  return (
    <main className="flex h-screen font-manrope">
      
      {/* LEFT SIDE */}
      <section
        className="w-1/2 hidden md:flex flex-col justify-between p-10 bg-cover bg-center  bg-no-repeat  relative"
        style={{ backgroundImage: `url(${forgetImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <header className="relative z-10 text-sm tracking-widest text-white">
          EST. 2024
        </header>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
            RESET <br /> YOUR <br /> ACCESS.
          </h1>

          <p className="mt-6 text-white max-w-md">
            Forgotten your password? No worries. We’ll help you get back into your space.
          </p>
        </div>

        <footer className="relative z-10 text-xs text-white">
          FINE ART DIGITAL CURATION
        </footer>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full md:w-1/2 flex items-center justify-center bg-[#f8f8f8] px-6">
        <div className="w-full max-w-md">

          {/* Header */}
          <header className="mb-10">
            <p className="text-xs tracking-widest text-gray-500">
              ACCOUNT RECOVERY
            </p>
            <h1 className="text-3xl font-light mt-2">
              Forgot your password?
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your email and we’ll send you a reset link.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="text-xs tracking-widest text-gray-500">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none focus:border-black"
                required
              />
            </div>

            <button className="w-full bg-gray-700 text-white py-3 mt-6 hover:cursor-pointer active:scale-90 rounded-3xl hover:bg-black transition-all ease-in-out">
              SEND RESET LINK
            </button>

            <div className="text-center mt-6 text-sm text-gray-500">
              Remember your password?{" "}
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

export default ForgotPassword;