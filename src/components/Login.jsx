// Login.jsx
import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/analysthub.jpg";
import toast, {Toaster} from "react-hot-toast";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });


  const defaultUsername = import.meta.env.VITE_DEFAULT_USERNAME;
  const defaultPassword = import.meta.env.VITE_DEFAULT_PASSWORD;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.username === defaultUsername && inputs.password === defaultPassword) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful - you'll be redirected in 3 secs");
      setTimeout(() => {
        window.location.href = "/form";
      }, 3000); // Redirect to form after 3 seconds
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-mainColor to-blue-400 hover:bg-gradient-to-bl hover:from-mainColor hover:to-blue-400">
      <Toaster /> {/* Add Toaster here */}
      <div className="bg-white p-5 sm:p-20 rounded-[10px] w-[90vw] sm:w-[42%]">
        <img
          src={logo}
          alt="logo-pics"
          className="w-24 sm:w-28 mx-auto justify-center"
        />
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <h2 className="font-bold text-[18px] sm:text-[22px] tracking-wide w-full text-center">
              Login to your account
            </h2>
          </div>
          <div className="eachInput">
            <input
              required
              type="text"
              id="username"
              onChange={handleChange}
              value={inputs.username}
              className=""
              placeholder=""
              name="username"
            />
            <label htmlFor="username" className="">
              Enter Username
            </label>
          </div>
          <div className="eachInput">
            <input
              required
              type="password"
              id="password"
              onChange={handleChange}
              value={inputs.password}
              className=""
              placeholder=""
              name="password"
            />
            <label htmlFor="password" className="">
              Enter Password
            </label>
          </div>
          <div className="flex justify-center mb-5 mt-4 items-center">
            <button className="uppercase rounded-[5px] bg-mainColor hover:bg-blue-600 py-2 text-white font-semibold sm:w-[40%] w-[70%] text-[13px]">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
