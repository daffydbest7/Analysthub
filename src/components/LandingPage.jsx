// Login.jsx
import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/analysthub.jpg";
import { Link } from "react-router-dom";


const LandingPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-mainColor to-blue-400 hover:bg-gradient-to-bl hover:from-mainColor hover:to-blue-400">
    
      <div className="bg-white p-5 sm:p-20 rounded-[10px] w-[90vw] sm:w-[42%]">
        <img
          src={logo}
          alt="logo-pics"
          className="w-24 sm:w-28 mx-auto justify-center"
        />
        <p className="mt-2 md:mt-4 lg:mt-4 font-semibold text-neutral-800 font-sans text-center">Welcome! Kindly Navigate using the buttons provided below.</p>
        <div className="mt-4 md:mt-8 lg:mt-8 mx-auto flex flex-row space-x-8  justify-center">
          <div>
            <Link to="/auth/waec_capture">
              <button className="px-4 py-2 rounded-lg bg-mainColor hover:bg-blue-600 text-white font-sans font-bold"> WAEC </button>
            </Link>
          </div>
          <div>
           <Link to="/auth/neco_capture">
              <button className="px-4 py-2 rounded-lg  bg-mainColor hover:bg-blue-600 text-white  font-sans font-bold"> NECO </button>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
